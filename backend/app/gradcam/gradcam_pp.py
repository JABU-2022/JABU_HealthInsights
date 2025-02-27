import numpy as np
import matplotlib.pyplot as plt
from tf_keras_vis.gradcam import GradcamPlusPlus
from tf_keras_vis.utils.model_modifiers import ReplaceToLinear
from utils.image_utils import normalize


def generate_gradcam(model, image):
    replace2linear = ReplaceToLinear()
    gradcam_pp = GradcamPlusPlus(model, model_modifier=replace2linear)

    # Define a custom score function for binary classification
    def score_function(output):
        return output[:, 0]  # Use the single output neuron

    penultimate_layer = 'conv5_block32_concat'  # Adjust this if necessary

    # Generate the heatmap
    heatmap = gradcam_pp(score_function, image,
                         penultimate_layer=penultimate_layer)
    heatmap = normalize(heatmap)

    # Save the heatmap
    plt.figure(figsize=(10, 10))
    plt.imshow(np.squeeze(image))
    plt.imshow(heatmap[0], cmap='jet', alpha=0.5)
    heatmap_path = 'static/gradcam_image.png'
    plt.savefig(heatmap_path)
    plt.close()
    return heatmap_path

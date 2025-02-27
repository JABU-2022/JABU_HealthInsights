import os
import tensorflow as tf
# We need to track this


def load_densenet_model():
    # Load the pre-trained DenseNet201 model (h5 file)
    model = tf.keras.models.load_model(
        "models/densenet.h5")
    return model


def predict_disease(model, image):
    # Make predictions
    preds = model.predict(image)
    # For binary classification, the output is a single value between 0 and 1
    # Extract the probability of the positive class
    predicted_prob = preds[0][0]

    # Determine the predicted class based on a threshold (e.g., 0.5)
    predicted_class = 1 if predicted_prob > 0.5 else 0

    return predicted_class

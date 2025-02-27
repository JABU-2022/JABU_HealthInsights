console.log("Script loaded!");

// Online Courses Section

document.addEventListener("DOMContentLoaded", function () {
  const courses = [
    {
      title: "Understanding Pneumonia: Comprehensive Guide",
      description:
        "Learn about the causes, symptoms, and treatment of pneumonia in this comprehensive course designed for healthcare professionals.",
      duration: "6 hours",
      difficulty: "Intermediate",
      rating: 4.8,
      enrolled: 1234,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    },
    {
      title: "Pediatric Pneumonia Management",
      description:
        "Specialized course focused on diagnosing and treating pneumonia in children, with emphasis on latest treatment protocols.",
      duration: "8 hours",
      difficulty: "Advanced",
      rating: 4.9,
      enrolled: 856,
      image:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80",
    },
    {
      title: "Pneumonia Prevention Strategies",
      description:
        "Learn effective strategies to prevent pneumonia in various healthcare settings and community environments.",
      duration: "4 hours",
      difficulty: "Beginner",
      rating: 4.7,
      enrolled: 2156,
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
    },
    {
      title: "Advanced Imaging in Pneumonia",
      description:
        "Master the interpretation of chest X-rays and CT scans in pneumonia diagnosis with this advanced course.",
      duration: "10 hours",
      difficulty: "Advanced",
      rating: 4.9,
      enrolled: 645,
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
    },
  ];

  const courseContainer = document.getElementById("course-container");
  console.log(courseContainer);

  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";

    const imageDiv = document.createElement("div");
    imageDiv.className = "relative h-48 overflow-hidden";
    const img = document.createElement("img");
    img.src = course.image;
    img.alt = course.title;
    img.className =
      "w-full h-full object-cover transition-transform duration-300 hover:scale-105";
    imageDiv.appendChild(img);

    const badge = document.createElement("div");
    badge.className = "badge absolute top-4 right-4";
    badge.textContent = course.difficulty;
    imageDiv.appendChild(badge);

    const cardHeader = document.createElement("div");
    cardHeader.className = "p-4";
    const title = document.createElement("h3");
    title.className = "text-xl font-semibold leading-tight text-gray-900";
    title.textContent = course.title;
    cardHeader.appendChild(title);

    const cardContent = document.createElement("div");
    cardContent.className = "p-4";
    const description = document.createElement("p");
    description.className = "text-sm text-gray-600 line-clamp-2 mb-4";
    description.textContent = course.description;
    cardContent.appendChild(description);

    const details = document.createElement("div");
    details.className = "flex items-center gap-4 text-sm text-gray-600";
    const duration = document.createElement("div");
    duration.className = "flex items-center gap-1";
    duration.innerHTML = "⏱️ " + course.duration;
    details.appendChild(duration);

    const enrolled = document.createElement("div");
    enrolled.className = "flex items-center gap-1";
    enrolled.innerHTML = "📚 " + course.enrolled + " enrolled";
    details.appendChild(enrolled);
    cardContent.appendChild(details);

    const cardFooter = document.createElement("div");
    cardFooter.className = "footer";
    const rating = document.createElement("div");
    rating.className = "flex items-center gap-1";
    rating.innerHTML = "⭐ " + course.rating.toFixed(1);
    cardFooter.appendChild(rating);

    const enrollButton = document.createElement("button");
    enrollButton.className =
      "px-4 py-2 bg-medical-600 text-white rounded-md hover:bg-medical-700 transition-colors";
    enrollButton.textContent = "Enroll Now";
    cardFooter.appendChild(enrollButton);

    courseCard.appendChild(imageDiv);
    courseCard.appendChild(cardHeader);
    courseCard.appendChild(cardContent);
    courseCard.appendChild(cardFooter);

    courseContainer.appendChild(courseCard);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("currentDate").textContent = currentDate;
});

document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  function loadCalendarDays(month, year) {
    const daysContainer = document.getElementById("dates");
    daysContainer.innerHTML = ""; // Clear previous cells
    let date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      const dayCell = document.createElement("span");
      dayCell.innerText = date.getDate();
      if (
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth()
      ) {
        dayCell.classList.add("today");
      }
      daysContainer.appendChild(dayCell);
      date.setDate(date.getDate() + 1);
    }
  }

  document.querySelector(".prev-month").addEventListener("click", () => {
    loadCalendarDays(currentMonth - 1, currentYear);
  });

  document.querySelector(".next-month").addEventListener("click", () => {
    loadCalendarDays(currentMonth + 1, currentYear);
  });

  loadCalendarDays(currentMonth, currentYear); // Load current month
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointment-form");
  const confirmation = document.getElementById("confirmation");
  const anotherAppointmentBtn = document.getElementById("another-appointment");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.classList.add("hidden");
    confirmation.classList.remove("hidden");
  });

  anotherAppointmentBtn.addEventListener("click", function () {
    form.reset();
    form.classList.remove("hidden");
    confirmation.classList.add("hidden");
  });
});

const supabaseUrl = "https://cgwfbohodsudyhyuuxwa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnd2Zib2hvZHN1ZHloeXV1eHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjU1NzYsImV4cCI6MjAzNzY0MTU3Nn0.oLlmLnpGf09Edemcw8k8XanluU8wehFmTQ44HSg3dtM";
const client = supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", async function () {
  // Get the user details from Supabase on authentication
  const {
    data: { user },
  } = await client.auth.getUser();

  console.log(user);

  // Function to update the welcome message with the user's full name
  function updateWelcomeMessage(userName) {
    const welcomeMessageElement = document.querySelector(".welcome-message h1");
    // Update the welcome message with the user's full name
    welcomeMessageElement.textContent = `Welcome, ${userName}`;
  }

  function updateprofilename(userName) {
    // Target the h1 element within the profile-info class inside profile-card
    const profileNameElement = document.querySelector(
      ".profile-card .profile-info h1"
    );
    // Update the profile name with the user's full name
    profileNameElement.textContent = userName;
  }

  // Check if the user object exists and has the full_name property
  if (user && user.user_metadata.first_name) {
    // updateWelcomeMessage("Ademola");
    updateWelcomeMessage(user.user_metadata.first_name);
    updateprofilename(
      `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
    );
  } else {
    console.error("User details not found");
  }
});

// Toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const sidebar = document.getElementById("sidebar");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed"); // Toggle the collapsed class
  });
});

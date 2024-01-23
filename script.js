/* Testimonials data
const testimonials = [
    { text: "“Not only is Dirk easier to work with than my prior suppliers, but he has also found ways to work with us on things like order fulfillment.”.", author: "[Mike East, Founder and President of Smart Level]" },
    { text: "The team's dedication and expertise made our project a success.", author: "[Client Name 2]" },
    { text: "Another satisfied client testimonial.", author: "[Client Name 3]" },
    
];

let currentIndex = 0;


function showNext() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

function updateTestimonial() {
    document.getElementById("testimonialText").innerText = testimonials[currentIndex].text;
    document.getElementById("testimonialAuthor").innerText = testimonials[currentIndex].author;
    
    document.getElementById("testimonialImage").innerHTML = `<img src=".//mike.png" alt="Client ${currentIndex + 1} Image" class="client-image">`;
}


updateTestimonial();

*/
// facility data
/*
const facility = [
    {
        text: `
          Intelligent Storage System
    
          Juki ISM3600
          • Stores reels (2,357 reel capacity)
          • Humidity controlled
          • ESD compliant
    
          Juki ISM500
          • Fits PCBs, SMT trays, SMT tubes
          • 640 configurable positions
          • Humidity controlled
          • ESD compliant
        `
      },
      {
        text: "Surface Mounters\nJuki RS-1R\n\n" +
            "• Two in-line mounters\n" +
            "• 112 feeder inputs\n" +
            "• Optimum placement speed: 47,000CPH\n" +
            "• Placement accuracy ±35um (CPK >=1)\n" +
            "• 20x14.5in max PCB dimensions\n" +
            "• 8 nozzle adaptive placement heads\n" +
            "• Matrix tray changer supports 30 trays"
    },
    { text: "Solder Paste Printer\nJuki G-Titan\n\n• Auto paste dispensing\n• Flexible clamping (side or top)\n• 2D PCB and stencil aperture inspection\n• Solder paste rolling measurement" },
    { 
        text: "Selective Soldering System\nJuki iCUBE\n\n" +
              "• Dual nozzle\n" +
              "• Inline\n" +
              "• Up to 20x18in PCB input\n" +
              "• Pb-free solder pots\n" +
              "• Spray fluxes\n" +
              "• N2 pre-heater\n" +
              "• Fiducial recognition"
      },
    // Add more testimonials as needed
];
let currentIndex = 0;

// Function to display next facility
function showNext() {
    currentIndex = (currentIndex + 1) % facility.length;
    updateFacility();
}

// Function to display previous facility
function showPrev() {
    currentIndex = (currentIndex - 1 + facility.length) % facility.length;
    updateFacility();
}

// Function to update facility content
function getImagePath(index) {
    const imagePaths = [
        "C:\\Users\\lahar\\OneDrive\\Desktop\\Bayasite office\\Bayasite office\\materail storage.png",
        "SMT.png",
        "solder printing.png",
        "selective soldering.png"
    ];
    return imagePaths[index] || "";
}

function updateFacility() {
    const currentFacility = facility[currentIndex];
    document.getElementById("facilityText").innerText = currentFacility.text;
    // Update client image source based on the current index
    const imagePath = getImagePath(currentIndex);
    document.getElementById("facilityImage").innerHTML = `<img src="${imagePath}" alt="Facility ${currentIndex + 1} Image" class="client-image">`;
}

// Initial display of facility
updateFacility();
*/


const facility = [
    {
        text: `
          Intelligent Storage System
    
          Juki ISM3600
          • Stores reels (2,357 reel capacity)
          • Humidity controlled
          • ESD compliant
    
          Juki ISM500
          • Fits PCBs, SMT trays, SMT tubes
          • 640 configurable positions
          • Humidity controlled
          • ESD compliant
        `
    },
    {
        text: "Surface Mounters\nJuki RS-1R\n\n" +
            "• Two in-line mounters\n" +
            "• 112 feeder inputs\n" +
            "• Optimum placement speed: 47,000CPH\n" +
            "• Placement accuracy ±35um (CPK >=1)\n" +
            "• 20x14.5in max PCB dimensions\n" +
            "• 8 nozzle adaptive placement heads\n" +
            "• Matrix tray changer supports 30 trays"
    },
    { text: "Solder Paste Printer\nJuki G-Titan\n\n• Auto paste dispensing\n• Flexible clamping (side or top)\n• 2D PCB and stencil aperture inspection\n• Solder paste rolling measurement" },
    {
        text: "Selective Soldering System\nJuki iCUBE\n\n" +
              "• Dual nozzle\n" +
              "• Inline\n" +
              "• Up to 20x18in PCB input\n" +
              "• Pb-free solder pots\n" +
              "• Spray fluxes\n" +
              "• N2 pre-heater\n" +
              "• Fiducial recognition"
    },
];
let currentIndex = 0;

// Function to display next facility
function showNext() {
    currentIndex = (currentIndex + 1) % facility.length;
    updateFacility();
}

// Function to display previous facility
function showPrev() {
    currentIndex = (currentIndex - 1 + facility.length) % facility.length;
    updateFacility();
}

// Function to update facility content
function getImagePath(index) {
    const imagePaths = [
        "C:\\Users\\lahar\\OneDrive\\Desktop\\Bayasite office\\Bayasite office\\materail storage.png",
        "SMT.png",
        "solder printing.png",
        "selective soldering.png"
    ];
    return imagePaths[index] || "";
}

function updateFacility() {
    const currentFacility = facility[currentIndex];
    document.getElementById("facilityText").innerText = currentFacility.text;
    // Update client image source based on the current index
    const imagePath = getImagePath(currentIndex);
    document.getElementById("facilityImage").innerHTML = `<img src="${imagePath}" alt="Facility ${currentIndex + 1} Image" class="client-image">`;
}

// Initial display of facility
updateFacility();
var modal = document.getElementById("uniqueModal");
var modalTitle = document.getElementById("uniqueModalTitle");
var modalItemList = document.getElementById("uniqueModalItemList");
var modalDescription = document.getElementById("uniqueModalDescription");

function openModal(title, itemList, description) {
    modalTitle.innerText = title;
    modalItemList.innerHTML = itemList.split(',').map(item => `<li>${item.trim()}</li>`).join('');
    modalDescription.innerText = description;
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

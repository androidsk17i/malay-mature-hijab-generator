const scenes = [
    "sitting in a car",
    "at a cafe",
    "walking in a shopping mall",
    "at a park",
    "in a restaurant",
    "at a bookstore",
    "grocery shopping",
    "at a bus stop",
    "in front of a mirror",
    "at home",
    "in an elevator",
    "at a train station"
];

const poses = [
    "looking at phone",
    "smiling at camera",
    "looking away",
    "drinking coffee",
    "reading a book",
    "checking watch",
    "adjusting hijab",
    "holding shopping bags",
    "taking selfie",
    "casual standing pose",
    "sitting casually",
    "walking pose"
];

const hijabStyles = [
    "plain pastel hijab",
    "floral pattern hijab",
    "modern style hijab",
    "casual hijab style",
    "loose hijab",
    "wrapped hijab",
    "simple hijab"
];

const outfits = [
    "casual blouse",
    "long dress",
    "cardigan",
    "modest casual wear",
    "modern abaya",
    "tunic top",
    "loose sweater"
];

const phoneTypes = [
    "iPhone 13",
    "Samsung Galaxy",
    "Google Pixel",
    "iPhone 12",
    "iPhone 14"
];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generatePrompt() {
    const scene = getRandomItem(scenes);
    const pose = getRandomItem(poses);
    const hijabStyle = getRandomItem(hijabStyles);
    const outfit = getRandomItem(outfits);
    const phone = getRandomItem(phoneTypes);

    const positivePrompt = `beautiful mature Malay woman wearing ${hijabStyle} and ${outfit}, ${pose}, ${scene}, natural lighting, candid photo, shot on ${phone}, amateur photography, realistic, photorealistic, 8k uhd, natural skin texture, film grain, slight motion blur, (high detailed skin:1.2), RAW photo, soft lighting`;

    const negativePrompt = `deformed, bad anatomy, disfigured, poorly drawn face, mutated, extra limb, ugly, missing limb, floating limbs, disconnected limbs, disconnected head, malformed hands, long neck, mutated hands and fingers, missing fingers, cropped, worst quality, low quality, mutation, poorly drawn, huge calf, fused hand, missing hand, disappearing arms, disappearing thigh, disappearing calf, disappearing legs, fused fingers, abnormal eye proportion, abnormal hands, legs, feet, fingers, drawing, painting, crayon, sketch, graphite, (deformed iris, deformed pupils), bad eyes, wrong lips, weird mouth, bad teeth, anime, cartoon, 3d render, (bad-artist:1.0), (bad-image-v2-39000), multiple views, multiple panels, blurry, watermark, letterbox, text, error, duplicate, ugly, monochrome, horror`;

    return {
        positive: positivePrompt,
        negative: negativePrompt
    };
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const prompts = generatePrompt();
    document.getElementById('positivePrompt').value = prompts.positive;
    document.getElementById('negativePrompt').value = prompts.negative;
});

document.getElementById('copyPositiveBtn').addEventListener('click', () => {
    const positivePrompt = document.getElementById('positivePrompt');
    positivePrompt.select();
    document.execCommand('copy');
    alert('Positive prompt copied to clipboard!');
});

document.getElementById('copyNegativeBtn').addEventListener('click', () => {
    const negativePrompt = document.getElementById('negativePrompt');
    negativePrompt.select();
    document.execCommand('copy');
    alert('Negative prompt copied to clipboard!');
});

document.getElementById('copyBothBtn').addEventListener('click', () => {
    const positivePrompt = document.getElementById('positivePrompt').value;
    const negativePrompt = document.getElementById('negativePrompt').value;
    const combinedPrompt = `Positive prompt:\n${positivePrompt}\n\nNegative prompt:\n${negativePrompt}`;
    
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = combinedPrompt;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Both prompts copied to clipboard!');
}); 
# Hijabi Photo Prompt Generator

A simple web-based tool that generates prompts for Stable Diffusion 1.5 to create realistic amateur-style photos of Malay women wearing hijab in casual settings.

## Features

- Generates natural, realistic prompts for Stable Diffusion 1.5
- Separate positive and negative prompts
- Random combinations of:
  - Scenes (cafe, mall, car, etc.)
  - Poses (casual, natural poses)
  - Hijab styles
  - Outfits
  - Phone camera types
- Copy buttons for:
  - Positive prompt only
  - Negative prompt only
  - Both prompts together

## How to Use

1. Download or clone all files:
   - index.html
   - styles.css
   - script.js

2. Open `index.html` in a web browser

3. Click "Generate New Prompt" to create a new combination

4. Use the copy buttons to copy the prompts:
   - Blue button: Copy positive prompt
   - Orange button: Copy negative prompt
   - Purple button: Copy both prompts

5. Paste the prompts into your Stable Diffusion 1.5 interface

## Prompt Structure

The generator creates two types of prompts:

### Positive Prompt
- Includes subject description (Malay woman wearing hijab)
- Natural scene and pose
- Technical parameters for realistic results
- Camera and photography style

### Negative Prompt
- Prevents common AI artifacts
- Avoids unrealistic features
- Excludes unwanted artistic styles
- Prevents technical issues

## Customization

You can modify the arrays in `script.js` to:
- Add new scenes
- Include different poses
- Add more hijab styles
- Include additional outfits
- Update phone camera types

## Technical Details

- Pure HTML, CSS, and JavaScript
- No dependencies required
- Mobile-responsive design
- Clipboard functionality for easy copying

## License

Free to use and modify for personal and commercial projects. 
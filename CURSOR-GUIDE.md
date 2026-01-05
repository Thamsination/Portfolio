# Using Cursor with Your Portfolio

This guide shows you how to effectively use Cursor AI to maintain and enhance your portfolio website.

## Quick Start

Your portfolio is located at: `/home/thamsination/portfolio/`

### Preview Your Site

The development server is running at: **http://localhost:3000**

If it's not running, start it with:
```bash
cd /home/thamsination/portfolio
npm run dev
```

## Common Tasks with Cursor

### 1. Adding a New Project

**What to tell Cursor:**
> "Add a new project called [Project Name] to my portfolio. It's a [category] project from [year]. Here's the description: [description]"

**What Cursor will do:**
1. Update `data/projects.ts` with your new project
2. Help you organize project images
3. Test that it appears correctly

**You need to provide:**
- Project images (place in `public/projects/your-project-id/`)
- Project details (role, timeline, tools used, description)

---

### 2. Changing Colors/Styling

**What to tell Cursor:**
> "Change the primary color from gray to [color]"
> "Make the hero section background [color/gradient]"
> "Update the button style to be more [description]"

**Example:**
> "Change the navigation bar to have a blue accent color instead of gray"

Cursor will update the Tailwind CSS classes throughout your components.

---

### 3. Updating Personal Information

**What to tell Cursor:**
> "Update my email address to [new-email]"
> "Change my LinkedIn URL to [url]"
> "Update the bio on the about page"

**Files Cursor will modify:**
- `components/Footer.tsx` - Footer contact info
- `app/about/page.tsx` - About page content
- `app/contact/page.tsx` - Contact page info

---

### 4. Adding New Features

**Examples:**
> "Add a blog section to my portfolio"
> "Add a dark mode toggle"
> "Add a project filtering by year"
> "Add a testimonials section to the homepage"

Cursor will:
1. Create necessary components
2. Update routing if needed
3. Style to match existing design
4. Test the feature

---

### 5. Fixing Bugs

**What to tell Cursor:**
> "The contact form isn't working"
> "Images aren't loading on the projects page"
> "The mobile menu doesn't close when I click a link"

Cursor will:
1. Investigate the issue
2. Explain what's wrong
3. Fix it
4. Test the fix

---

### 6. Optimizing Images

**What to tell Cursor:**
> "Help me optimize my project images for web"
> "My images are loading slowly, can you help?"

**Before asking Cursor:**
- Have your images ready (preferably high-quality)
- Know where they should go

---

### 7. Updating Content

**What to tell Cursor:**
> "Update the homepage hero text to say [new text]"
> "Change the skills list on the about page"
> "Update project [name] with new images"

---

## Project Structure Reference

```
portfolio/
├── app/                    # Pages
│   ├── page.tsx           # Homepage - hero, featured projects
│   ├── projects/          # Projects gallery and details
│   ├── about/             # About page - bio, skills, experience
│   └── contact/           # Contact form
│
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation (edit for menu items)
│   ├── Footer.tsx        # Footer (edit for contact info)
│   ├── ProjectCard.tsx   # Project preview cards
│   └── ProjectDetail.tsx # Individual project page layout
│
├── data/
│   └── projects.ts       # ⭐ EDIT THIS to add/update projects
│
├── public/
│   └── projects/         # ⭐ PUT PROJECT IMAGES HERE
│       ├── project-1/
│       │   ├── thumbnail.jpg
│       │   ├── image1.jpg
│       │   └── image2.jpg
│       └── project-2/
│
└── app/globals.css       # Global styles
```

## Tips for Working with Cursor

### 1. Be Specific
❌ "Make it better"
✅ "Make the project cards larger and add a shadow effect"

### 2. One Task at a Time
❌ "Change colors, add blog, fix contact form, update about page"
✅ "Change the primary color scheme from gray to navy blue"

### 3. Provide Context
❌ "Fix the bug"
✅ "The contact form submit button isn't working - when I click it, nothing happens"

### 4. Reference Examples
✅ "Make the homepage hero section similar to [website URL]"
✅ "I want project cards like on [website], with hover effects"

### 5. Test After Changes
After Cursor makes changes:
1. Check the browser (http://localhost:3000)
2. Test on mobile (resize browser window)
3. Click through all pages
4. Tell Cursor if something needs adjustment

## Keyboard Shortcuts in Cursor

- **Cmd/Ctrl + K**: AI inline edit (select code, then press)
- **Cmd/Ctrl + L**: Open AI chat
- **Cmd/Ctrl + I**: AI composer (for larger changes)
- **Cmd/Ctrl + Shift + P**: Command palette

## Common Questions

### "How do I add a new page?"

> "Add a new page called [page-name] to my portfolio with [description of content]"

Cursor will:
1. Create `app/[page-name]/page.tsx`
2. Add it to navigation in `Header.tsx`
3. Style it to match existing pages

### "How do I change fonts?"

> "Change the font to [font-name]"

Cursor will update `app/layout.tsx` to import and use the new font.

### "How do I make the site faster?"

> "Analyze and optimize my portfolio's performance"

Cursor will:
1. Check image optimization
2. Review code splitting
3. Suggest improvements

### "How do I update my resume PDF?"

1. Place your new resume PDF in `public/` folder
2. Name it `resume.pdf`
3. Tell Cursor: "Update the resume download link to use the new PDF"

## Workflow for Making Changes

1. **Tell Cursor what you want**
   - Be specific and clear
   - Provide examples if helpful

2. **Cursor makes changes**
   - Watch the files being modified
   - Cursor will explain what it's doing

3. **Preview in browser**
   - Check http://localhost:3000
   - Test the changes

4. **Iterate if needed**
   - "Make it bigger"
   - "Use a different color"
   - "Add more spacing"

5. **Commit when happy**
   - Tell Cursor: "Commit these changes with message: [description]"
   - Or manually: `git add . && git commit -m "Description"`

6. **Deploy**
   - `git push` - GitHub Actions automatically deploys

## Getting Help from Cursor

### For Design Decisions:
> "What colors would work well for an industrial design portfolio?"
> "Suggest layout improvements for the projects gallery"

### For Technical Issues:
> "Why isn't my site building?"
> "Explain what this error means: [paste error]"

### For Learning:
> "Explain how the project filtering works"
> "How does the image optimization work in Next.js?"

## Best Practices

1. **Commit Often**
   - After each feature or fix
   - Use clear commit messages
   - Makes it easy to undo if needed

2. **Test on Mobile**
   - Resize browser to mobile size
   - Check all pages
   - Ensure navigation works

3. **Keep Backups**
   - Git automatically backs up everything
   - Can always revert: `git checkout [file]`

4. **Update Regularly**
   - Add new projects as you complete them
   - Keep content fresh
   - Update skills and experience

## Need More Help?

Just ask Cursor:
> "I need help with [specific task]"
> "How do I [accomplish goal]?"
> "Something's not working: [describe issue]"

Cursor is here to help you build and maintain your portfolio! 🚀


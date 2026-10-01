const fs = require('fs');
['src/App.tsx', 'src/components/SectionHeading.tsx', 'src/sections/About.tsx', 'src/sections/Education.tsx', 'src/sections/Journey.tsx', 'src/sections/Skills.tsx'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/import React(?:, \{.*?\})? from 'react';\r?\n/g, '');
  fs.writeFileSync(f, c);
});
let n = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
n = "import { useState, useEffect } from 'react';\n" + n;
fs.writeFileSync('src/components/Navbar.tsx', n);
let p = fs.readFileSync('src/sections/Projects.tsx', 'utf8');
p = p.replace(/import React, \{ useState \} from 'react';\r?\n/, "import { useState } from 'react';\n");
fs.writeFileSync('src/sections/Projects.tsx', p);

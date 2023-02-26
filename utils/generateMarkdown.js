// Function that returns a license badge based on which license is passed in
// If there is no license or the license badge doesn't exist, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Academic Free License v3.0":
      return "[![License](https://img.shields.io/badge/License-AFL_3.0-blue.svg)](https://opensource.org/license/afl-3-0-php/)";
    case "Apache license 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Artistic license 2.0":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "BSD 2-clause 'Simplified' license":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-clause Clear license":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/) [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Creative Commons Attribution 4.0":
      return "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/) [![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
    case "Creative Commons Attribution Share Alike 4.0":
      return "[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/) [![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
    case "Do What The F*ck You Want To Public License":
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    case "Educational Community License v2.0":
      return "[![License: EPL-2.0](https://img.shields.io/badge/License-EPL_v2.0-blue.svg)](https://opensource.org/license/epl-2-0/)";
    case "Eclipse Public License 1.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-blue.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_2.0-blue.svg)](https://opensource.org/licenses/EPL-2.0)";
    case "European Union Public License 1.1":
      return "[![License: EUPL v1.1](https://img.shields.io/badge/License-EUPL_1.1-blue.svg)](https://spdx.org/licenses/EUPL-1.1.html)";
    case "GNU Affero General Public License v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU General Public License v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU Lesser General Public License v2.1":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)";
    case "GNU Lesser General Public License v3.0":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "LaTeX Project Public License v1.3c":
      return "[![License: LPPL v1.3c](https://img.shields.io/badge/License-LPPL_v1.3c-blue.svg)](https://spdx.org/licenses/LPPL-1.3c.html)";
    case "Microsoft Public License":
      return "[![License: MS-PL](https://img.shields.io/badge/License-MSPL-blue.svg)](https://opensource.org/license/ms-pl-html/)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "Open Software License 3.0":
      return "[![LicenseL OSL v3.0](https://img.shields.io/badge/License-OSL_3.0-orange.svg)](https://opensource.org/license/osl-3-0-php/)";
    case "PostgreSQL License":
      return "[![License: PostgreSQL](https://img.shields.io/badge/License-PostgreSQL-orange.svg)](https://opensource.org/license/postgresql/)";
    case "SIL Open Font License 1.1":
      return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
    case "University of Illinois/NCSA Open Source License":
      return "[![License: NCSA](https://img.shields.io/badge/License-NCSA-orange.svg)](https://opensource.org/license/uoi-ncsa-php/)";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    case "zLib License":
      return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
    default:
      return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Academic Free License v3.0":
      return "[Academic Free License v3.0](https://opensource.org/license/afl-3-0-php/)";
    case "Apache license 2.0":
      return "[Apache license 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "Artistic license 2.0":
      return "[Artistic license 2.0](https://opensource.org/licenses/Artistic-2.0)";
    case "Boost Software License 1.0":
      return "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
    case "BSD 2-clause 'Simplified' license":
      return "[BSD 2-clause 'Simplified' license](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-clause Clear license":
      return "[BSD 3-clause Clear license](https://opensource.org/licenses/BSD-3-Clause)";
    case "Creative Commons Zero v1.0 Universal":
      return "[Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Creative Commons Attribution 4.0":
      return "[Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)";
    case "Creative Commons Attribution Share Alike 4.0":
      return "[Creative Commons Attribution Share Alike 4.0](https://creativecommons.org/licenses/by-sa/4.0/)";
    case "Do What The F*ck You Want To Public License":
      return "[Do What The F*ck You Want To Public License](http://www.wtfpl.net/about/)";
    case "Educational Community License v2.0":
      return "[Educational Community License v2.0](https://opensource.org/license/epl-2-0/)";
    case "Eclipse Public License 1.0":
      return "[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)";
    case "Eclipse Public License 2.0":
      return "[Eclipse Public License 2.0](https://opensource.org/license/epl-2-0/)";
    case "European Union Public License 1.1":
      return "[European Union Public License 1.1](https://spdx.org/licenses/EUPL-1.1.html)";
    case "GNU Affero General Public License v3.0":
      return "[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU General Public License v2.0":
      return "[GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU General Public License v3.0":
      return "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU Lesser General Public License v2.1":
      return "[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/lgpl-2.1)";
    case "GNU Lesser General Public License v3.0":
      return "[GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)";
    case "ISC":
      return "[ISC](https://opensource.org/licenses/ISC)";
    case "LaTeX Project Public License v1.3c":
      return "[LaTeX Project Public License v1.3c](https://spdx.org/licenses/LPPL-1.3c.html)";
    case "Microsoft Public License":
      return "[Microsoft Public License](https://opensource.org/license/ms-pl-html/)";
    case "MIT":
      return "[MIT](https://opensource.org/licenses/MIT)";
    case "Mozilla Public License 2.0":
      return "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
    case "Open Software License 3.0":
      return "[Open Software License 3.0](https://opensource.org/license/osl-3-0-php/)";
    case "PostgreSQL License":
      return "[PostgreSQL License](https://opensource.org/license/postgresql/)";
    case "SIL Open Font License 1.1":
      return "[SIL Open Font License 1.1](https://opensource.org/licenses/OFL-1.1)";
    case "University of Illinois/NCSA Open Source License":
      return "[University of Illinois/NCSA Open Source License](https://opensource.org/license/uoi-ncsa-php/)";
    case "The Unlicense":
      return "[The Unlicense](http://unlicense.org/)";
    case "zLib License":
      return "[zLib License](https://opensource.org/licenses/Zlib)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  switch (license) {
    case "Academic Free License v3.0":
      return;
    case "Apache license 2.0":
      return;
    case "Artistic license 2.0":
      return;
    case "Boost Software License 1.0":
      return;
    case "BSD 2-clause 'Simplified' license":
      return;
    case "BSD 3-clause Clear license":
      return;
    case "Creative Commons Zero v1.0 Universal":
      return;
    case "Creative Commons Attribution 4.0":
      return;
    case "Creative Commons Attribution Share Alike 4.0":
      return;
    case "Do What The F*ck You Want To Public License":
      return;
    case "Educational Community License v2.0":
      return;
    case "Eclipse Public License 1.0":
      return;
    case "Eclipse Public License 2.0":
      return;
    case "European Union Public License 1.1":
      return;
    case "GNU Affero General Public License v3.0":
      return;
    case "GNU General Public License v2.0":
      return;
    case "GNU General Public License v3.0":
      return;
    case "GNU Lesser General Public License v2.1":
      return;
    case "GNU Lesser General Public License v3.0":
      return;
    case "ISC":
      return;
    case "LaTeX Project Public License v1.3c":
      return;
    case "Microsoft Public License":
      return;
    case "MIT":
      return;
    case "Mozilla Public License 2.0":
      return;
    case "Open Software License 3.0":
      return;
    case "PostgreSQL License":
      return;
    case "SIL Open Font License 1.1":
      return;
    case "University of Illinois/NCSA Open Source License":
      return;
    case "The Unlicense":
      return;
    case "zLib License":
      return;
    default:
      return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}

  ## Description
  ${data.description}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to contribute](#how-to-contribute)
  - [Tests](#tests)

  ## Installation
  ${data.dependencies}

  ## Usage
  ${data.usage}

  ## Credits

  ## License
  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license, data.username)}
  
  ## How to contribute
  ${data.contributions}

  ## Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;

#!/usr/bin/env node

import * as checker from 'license-checker'

const dissallowedLicense = ["GPL-3.0-or-later", "GPL-3.0-only", "GPL-2.0-or-later", "GPL-2.0-only", "GPL-1.0-or-later", "GPL-1.0-only", "Artistic-1.0",
    "Artistic-1.0-cl8",
    "Artistic-1.0-Perl",
    "Artistic-2.0",
    "ClArtistic",
    "CC BY",
    "CC BY-SA",
    "CC BY-NC",
    "CC BY-NC-SA",
    "CC BY-ND",
    "CC BY-NC-ND",
    "EPL-2.0",
    "EPL-1.0",
    "CPL-1.0",
    "EUPL-1.0", "EUPL-1.1",
    "AGPL-3.0-or-later",
    "AGPL-3.0-only",
    "LGPL-3.0-or-later",
    "LGPL-3.0-only",
    "LGPL-2.1-or-later",
    "LGPL-2.1-only",
    "LGPL-2.0-or-later",
    "LGPL-2.0-only",
    "IPL-1.0",
    "Ms-RSL",
    "Ms-LRL",
    "Ms-LPL",
    "PHP-3.01",
    "NPL",
    "QPL-1.0",

]

checker.init({start: './'}, function(err, packages) {
    if (err) {
        console.error(err)
    } else {
        const packageKeys = Object.keys(packages)
        packageKeys.forEach((key) => {
            const lic = packages[key].licenses
            if (dissallowedLicense.includes(lic)){
                throw Error(`Package ${key} (${packages[key].repository}) use the ${lic} license which is not allowed`)
            }

        })

        console.log('All license where checked and are allowed!')
    }
})


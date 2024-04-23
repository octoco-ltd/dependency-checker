#!/usr/bin/env node

import * as checker from 'license-checker'

const allowedLicenses = [
    "AFL-3.0",
    "AFL-2.1",
    "AFL-2.0",
    "AFL-1.2",
    "AFL-1.1",
    "Apache-2.0",
    "Apache-1.1",
    "Apache-1.0",
    "APSL-1.0",
    "APSL-1.1",
    "APSL-1.2",
    "APSL-2.0",
    "Beerware",
    "BSD-4-Clause",
    "BSD-3-Clause",
    "BSD-2-Clause",
    "BSD-1-Clause",
    "0BSD",
    "CC BY",
    "CC0",
    "CECILL-1.0",
    "CECILL-1.1",
    "CECILL-2.0",
    "CECILL-2.1",
    "CECILL-B",
    "CECILL-C",
    "CDDL-1.1",
    "CDDL-1.0",
    "CPL-1.0", // Modification is copylefted!
    "EPL-2.0", // Modification is copylefted!
    "EPL-1.0", // Modification is copylefted!
    "ECL-1.0",
    "ECL-2.0",
    "BSD-2-Clause",
    "ISC",
    "LPPL-1.0",
    "LPPL-1.1",
    "LPPL-1.2",
    "LPPL-1.3a",
    "LPPL-1.3c",
    "MIT",
    "MIT*",
    "PSF-2.0",
    "W3C-19980720",
    "W3C-20150513",
    "W3C",
    "Unlicense",
    "WTFPL",
    "Zlib"
]

const coyleftModificationLicenses = [
    "CPL-1.0",
    "EPL-2.0",
    "EPL-1.0",
]

checker.init({ start: './' }, function (err, packages) {
    if (err) {
        console.error(err)
    } else {
        const packageKeys = Object.keys(packages)
        packageKeys.forEach((key) => {
            const lic = packages[key].licenses
            if (!allowedLicenses.includes(lic)) {
                console.log(packages[key])
                throw Error(`Package ${key} (${packages[key].repository}) uses the ${lic} license which is not allowed`)
            }

            if (coyleftModificationLicenses.includes(lic)) {
                console.warn(`Package ${key} (${packages[key].repository}) uses the ${lic} license which is copylefted for modifications!`)
            }
        })
        console.log('All license where checked and are allowed!')
    }
})


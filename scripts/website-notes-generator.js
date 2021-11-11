const fs = require('fs');

const MEETINGS_PATH = 'meetings/2021/website';

console.log('args',process.argv);
// only expect a date as input for the time being
let dateArg;
if(process.argv.length!==3){
  console.error('Error processing command line arguments, expected one (1) argument to specify date of website meeting');
  process.exit(1);
}else{
  dateArg = process.argv[2];
  // probably easier to just parse a date but here we are
  const dateRegex = /20\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])/;
  if(dateArg.match(dateRegex)){
    console.log('initializing new website meeting notes for date:',dateArg);
  }else{
    console.error(`date input ${dateArg} fails to match expected format yyyyMMdd`);
    process.exit(1);
  }
}

const longDate = `${dateArg.substring(0,4)}-${dateArg.substring(4,6)}-${dateArg.substring(6)}`;

const targetPath = `./${MEETINGS_PATH}/${dateArg}-website.md`;
const outputFile = fs.createWriteStream(targetPath, { flags: 'wx' });

outputFile.write( `# Developer DAO Website ${longDate}

- [⏱ Agenda](#-agenda)
- [Introduction](#introduction)
- [Action Item Review](#actoin-item-review)
- [Triage](#triage)
- [Design](#design)
- [Proposed Features Projects](#proposed-features-projects)
- [Misc](#misc)
- [Closing](#closing)
- [📝 Notes](#-notes)
- [📋 Attendees](#-attendees)
- [✅ Action items](#-action-items)
- [📹 Video recording](#-video-recording)

# ⏱ Agenda

### Introduction

- Welcome
- Narrow discussion around specifically the website

### Action Item Review


### Triage


#### Issues

- [Open Issues Last Updated Before ${dateArg}](https://github.com/Developer-DAO/developer-dao/issues?q=is%3Aissue+is%3Aopen+updated%3A<${longDate})
- [Open issues](https://github.com/Developer-DAO/developer-dao/issues)

#### PRs

- [Open PRs](https://github.com/Developer-DAO/developer-dao/pulls)

### Design


### Proposed Features Projects


### Misc


### Closing


# 📝 Notes


### 📋 Attendees


### ✅ Action items


### 📹 Audio and/or Video recording
`);

outputFile.on('finish', () => {
  console.log('completed creating meeting notes');
  console.log('make sure to update your dates on the stale issue query');
});
outputFile.end();
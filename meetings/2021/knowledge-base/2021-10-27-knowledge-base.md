<h1>Developer DAO Knowledge Base 2021-10-27</h1>

# Agenda
- [Agenda](#agenda)
  - [Meeting Purpose](#meeting-purpose)
  - [Tooling](#tooling)
    - [Draft of Notion structure](#draft-of-notion-structure)
    - [Clarification](#clarification)
    - [Recommendation](#recommendation)
    - [Next Steps](#next-steps)
- [Notes](#notes)
  - [Attendees](#attendees)

## Meeting Purpose
To coordinate ongoing development of the Developer DAO Knowledge Base

**Note**
Going forward (see below for more details), the "Knowledge Base" discussion will be split into 2 projects (and channels):
- Resource Base (`#resource-base` channel in Discord)
- DAO Wiki (`#dao-wiki` channel in Discord)

## Tooling

### Draft of Notion structure
**Knowledge Base on Notion**
- `@nathanng.eth` set up Notion account via developerdao1@gmail.com
- Currently it is a Personal, Free account (unlimited blocks, but no team member access)
- Notion Site: https://developerdao.notion.site/Developer-DAO-Wiki-eff4dcb00bef46fbaa93e9e4cf940e2e

**Proposed Table Structure / Resource Database Contribution Process**
- Resources, Glossary, People, Contributions
- NotionForms (free tier) leveraged to allow people to enter a form to put data into Resources
- Status will be left blank. Reviewers, if approving content, can set the status to "Public"
- Zapier (free tier) leveraged to auto-log entries into the Contributions table
- Pages will be leveraged to "curate" content easily by creating an inline linked table from the Resources table

**Pros**
- Easy access 
- Flexible database fields

**Cons**
- Leveraging 3 tools (Notion, NotionForms, Zapier) each with their own free tier limitations
- Unable to get a really nice flow with relational items

### Clarification
The term "Knowledge Base" became a term of confusion, due to multiple use cases, including:
1. A general "Wiki" for Developer DAO, for internal information, process, tools, links, etc.
2. A resources database, that we can collect (and later curate) to gather the best resources around the internet about web3.

With the Notion proposal, we tried to achieve both, but it is not a great fit for both.

Airtable, on the other hand, (proposed and supported by `@kempsterrrr.eth`) provides native, first-class, forms. These forms can:
- Unlimited fields
- External views (although this will likely need to be adapted further)
- Easy links to other tables (e.g. Authors, Contributors)
- Limitation of 1200 rows (a good problem to have if we get there)

### Recommendation
1. Turn Notion into a general "Wiki" for internal DAO use
2. Leverage Airtable as the Resource Database.

Additional ideas that surfaced on the call:
1. Create a discord bot that would allow people to add resources really quickly in the `#learning-resources` or `#boost-your-content` channels, via a slash command (e.g. `/add-resource`).  `@NoahH` signed up to lead this initiative.
2. Create an automation tool that would pull data from Airtable (maybe once a day) and update the markdown on the GitHub `resources` repo. `@gjsyme` signed up to lead this initiative

### Next Steps
1. `@kempsterrrr.eth` to continue setting up Airtable and create a proposal for the overall structure and contribution process
2. `@nathanng.eth` to update Notion into an internal Wiki
3. `@NoahH` to initiate project for Discord Bot to push content into Airtable Resource Base
4. `@gjsyme` to initiate project for automation to push content from Airtable Resource Base into markdown for the GitHub `resources` repo

# Notes

## Attendees
- `@busamaha`
- `@gjsyme`
- `@gracelily`
- `@joh`
- `@kempsterrrr.eth`
- `@nathanng.eth`
- `@NoahH`
- `@Profound Madman`
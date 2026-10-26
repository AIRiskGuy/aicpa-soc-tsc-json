# Trust Services Criteria | Machine Readable Formats

A collection of machine-readable formats for the Trust Services Criteria (TSC) and related documents. The TSC is a set of criteria used to evaluate the security, availability, processing integrity, confidentiality, and privacy of systems and services.

## Overview

| Format                                                                                                   | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [TSC Controls (JSON)](2017-trust-services-criteria-with-revised-points-of-focus-2022.controls.json)      | JSON data for the 2017 Trust Services Criteria with revised POF 2022 extracted from PDF                        |
| [TSC Controls (CSV)](2017-trust-services-criteria-with-revised-points-of-focus-2022.controls.csv)        | CSV data for the 2017 Trust Services Criteria with revised POF 2022 extracted from PDF                         |
| [TSC Background (JSON)](2017-trust-services-criteria-with-revised-points-of-focus-2022.background.json)  | JSON data for the 2017 Trust Services Criteria with revised POF 2022 background information extracted from PDF |
| [TSC Appendix (JSON)](2017-trust-services-criteria-with-revised-points-of-focus-2022.appendix.json)      | JSON data for the 2017 Trust Services Criteria with revised POF 2022 appendix information extracted from PDF   |
| [TSC Controls (JSON Schema)](2017-trust-services-criteria-with-revised-points-of-focus-2022.schema.json) | JSON schema for the 2017 Trust Services Criteria with revised POF 2022 controls extracted from PDF             |

> Note: JSON controls data was generated using AI and is not guaranteed to be 100% accurate. The CSV file was generated from the JSON file and is also not guaranteed to be 100% accurate. The original PDF files are the authoritative source for the TSC.

### Coverage and how the CSV is built

The controls JSON covers all 61 criteria (33 common criteria, 3 availability, 2 confidentiality, 5 processing integrity, 18 privacy) and all 330 points of focus in the PDF, and validates against the schema. Criterion statements and point-of-focus titles follow the PDF; `requirement` fields are short summaries, not the full AICPA wording. CC3.1 point-of-focus titles are prefixed with their COSO objective group (for example, "Operations Objectives: ...").

The controls CSV has one row per point of focus and is generated from the JSON, so the two always match:

```bash
npm run build:csv   # regenerate the CSV from the JSON
npm run check:csv   # fail if the CSV and JSON differ
```

`AICPA_SOC_2_TSC_2017.csv` is a separate, older file that reflects the original 2017 points of focus, before the 2022 revision; it is not generated from the JSON.

### JSON control sample and schema

Since AICPA does not publish a schema for the JSON control files, we have created our own schema based on the data in the JSON files. A sample of the data is below. The JSON Schema file of the TSC controls is available as well.

```json
{
	"trustServicesCriteria": {
		"controlEnvironment": [
			{
				"id": "CC1.1",
				"principle": "COSO Principle 1: The entity demonstrates a commitment to integrity and ethical values.",
				"pof": [
					{
						"id": "CC1.1.a",
						"title": "Sets the Tone at the Top",
						"requirement": "The board of directors and management demonstrate the importance of integrity and ethical values."
					},
					{
						"id": "CC1.1.b",
						"title": "Establishes Standards of Conduct",
						"requirement": "The expectations are defined in standards of conduct and understood at all levels."
					},
					{
						"id": "CC1.1.c",
						"title": "Evaluates Adherence to Standards of Conduct",
						"requirement": "Processes evaluate individuals and teams against expected standards."
					},
					{
						"id": "CC1.1.d",
						"title": "Addresses Deviations in a Timely Manner",
						"requirement": "Deviations are identified and remedied in a timely and consistent manner."
					},
					{
						"id": "CC1.1.e",
						"title": "Considers Contractors and Vendor Employees in Demonstrating Its Commitment",
						"requirement": "Includes contractors and vendors in standards of conduct processes."
					}
				]
			}
			// ... more controls
		]
		// more sections
	}
}
```

## Source Files

All source files are from the AICPA website and are in PDF format. The JSON and CSV files were generated from the PDF files using a custom script. The original PDF files are available at the following links:

- [2017 Trust Services Criteria with revised Points of Focus 2022](https://www.aicpa.org/content/dam/aicpa/interestareas/frc/downloadabledocuments/2017-trust-services-criteria-with-revised-points-of-focus-2022.pdf)

# Disclaimer

> Note: Control data in JSON and CSV were generated using the source PDF and AI and is not guaranteed to be 100% accurate. The original PDF files are the authoritative source for the TSC.

All converted data is provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the data or the use or other dealings in the data. Use at your own risk.

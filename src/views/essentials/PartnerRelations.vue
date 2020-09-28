<template>
    <v-container
        class=""
        fluid
    >
        <v-card flat>
            <v-toolbar
                color="primary"
                class="back-tool"
                dark
                extended
                height="80"
                tile
                flat
            >
            </v-toolbar>

            <v-card
                class="mx-auto"
                max-width="700"
                tile
                style="margin-top: -64px;"
            >
                <v-toolbar flat>
                    <v-row justify="center">
                        <v-toolbar-title class="grey--text headline">{{ page_title }}</v-toolbar-title>
                    </v-row>
                </v-toolbar>
                <v-divider></v-divider>

                <v-card-text style="min-height: 200px; overflow: scroll;">
                    <v-row
                        justify="start"
                        class="mx-2 my-5"
                    >{{ description }}</v-row>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-text>
                    <v-row
                        justify="center"
                        class="my-5"
                    >
                        <v-btn
                            color="primary"
                            rounded
                            router
                            :to="{name: 'Home'}"
                        >Start Eating</v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            description: `
            Purpose of this Policy:

To create and manage corporate relationships which expands the reach, impact and credibility of the Michael Moyo International (MMI) in consistency with the company’s strategic goals and priorities.

Mission-Related Benefit: MMI will enter corporate relationships to provide meaningful mission-related benefits to the public, communities served and/or MMI directly. 

Brand Effect: MMI retains all rights and use of its brand. Corporate relationships must generate a positive impact on the MMI brand.

Independence: In order to best achieve the company’s vision and mission, MMI seeks appropriate partnerships and third party alliances with governments, the corporate sector, faith-based institutions and charity organizations/foundations. At the same time, in order to realize the specifics of its vision, MMI must remain independent in its decision-making and arrangements regarding mission-related programs, business decisions, services and acquisition of funds.

Risk to MMI: Each opportunity is assessed on a case-by-case basis, including prospect research to ensure proper company ownership and holdings, and to determine if there are any adverse public relations that could negatively affect MMI. All prospective partners must have a minimum of 12 months in business, and have no significant legal violations within the past 12 months. This applies on a case-by-case basis, whether on a national or international level.

Other Considerations:

a) The corporate partner or a corporate body should be financially viable.

b) Precautions must be taken to assure proper control and complete implementation of each party’s goals. MMI must have access to the appropriate level of decision-makers within its partners. If third parties (agents, other sponsors, etc.) are involved, there must be effective control or protection of MMI’s interests.

c) All corporate or third-party relationships must be consistent with MMI’s principles, public positions, policies and standards.

Exclusions:

a) Endorsements: MMI prohibits any agreement or action that endorses a specific commercial product, process, service or enterprise that has no connection to the partnership arrangement.

b) Exclusivity: Only time-bound and limited activities may exclusivity be offered, such as category exclusivity within special event programs and within certain corporate and third party alliance programs. MMI will pursue customized approaches with individual companies and organizations with appropriate internal controls being followed.

c) Prior Grants: Rights previously granted to corporate partners that are inconsistent with this Policy will be honored and permitted only for the period of time for which they were originally granted. All subsequent relationships and all renewals of existing relationships must comply with these rules.

Partner Categories:

While each corporate relationship is defined by the terms and conditions of the written agreement(s) reached by MMI and the corporate partner, MMI may enter into relationships characterized by one or more of the following activities:

a) Product Purchase: A donation to the MMI triggered by the purchase of a product or service by a business or consumer.

b) Event Sponsorships: Support provided primarily to underwrite fundraising events for charity and church support.

c) Licensing: A relationship where the MMI authorizes a company to produce, market and/or distribute mission-related materials or consumer products that are marketed under the joint names of the MMI and the corporate partner, such as in the MMI’s partners in Education Program.

d) Message Promotions: Activities that direct the consumer to MMI for information on a specific activity in exchange for corporate use of the MMI’s name, logo or message in a third party’s advertising and promotional materials.

Internal Infrastructure, Approvals, Maintenance and Fees:

a) Decision Making Authority: MMI is authorized by the MMI Board of Directors to enter into partnerships that meet the criteria outlined in this policy, including authorizing partnerships, implementing partnership benefits, and establishing financial agreements. Agreements for corporate support are reviewed by the MMI Compliance Officer for congruence with MMI’s Conflict of Interest Policies.

b) Partnership Approval Process: For new opportunities that fall outside these policies, at the outset, a formal screening or evaluation of a proposal should be conducted considering MMI goals, strategies and priorities, MMI Policies, budget requirements, timetables, responsibilities of the parties, human resources, method of evaluation, expected results or yields and other pertinent details. MMI will confirm that the human and financial resources needed to fulfill its obligations in any MMI-business relationship are available. Sufficient time must be planned and allowed for MMI's customary review and approval process.

c) Budgetary Requirements: The budget should include expenditures and respective obligations of MMI and the corporate partner; direct and indirect costs; any fees to advertisement agencies/promoters or for support services to be paid by the corporate partner or MMI; and gross and net proceeds and their distribution and use.

d) Fees: Administrative fees may be charged to a corporate partner to cover MMI's direct and indirect costs. Sponsorship fees are expected to cover all or a part of the sponsored program or activity. Promotional fees required to otherwise participate in a promotion with MMI shall not be charged.

Written Agreement:

A written agreement is not necessary for any outright gift received from a corporate partner if the MMI is not obligated to meet any terms or conditions in return for that gift. For all other corporate relationships, the company must agree to sign a written agreement that governs all programs, promotions, sponsorships or partnerships which contains a mutual indemnification clause to ensure liability protection for both parties. If applicable, the written agreement will specify the respective obligations of the parties; incorporating the requirements of MMI Policies; and will specify the exact time period of the promotion, amount of funding, restricted/unrestricted designation, the minimum guaranteed benefits, description of mission-driven activity supported that both parties will agree to use for purposes of disclosure to the general public, manner of public disclosure, usage of name/logo, materials approval process, criteria for evaluating partnership, requirements for compliance with corporate partnership policies by all divisions and affiliates, and any other requirements as determined by MMI.

a) Income reporting or audit mechanisms must be available to assure that MMI receives intended benefits. It is desirable to be able to identify the source of the benefits to MMI. The corporate partner must provide a list of event participants or respondents (by name, address, zip code) when such capability exists.

b) The relationship or promotion can be program-specific and limited to a specific period of time. The corporate partner must not claim any continuing association with MMI after the conclusion of the specific promotion or termination of the relationship and no use may be made of the MMI name in registered format, logo, identifying marks or materials in any advertising or promotion activities by the corporate partner after completion of the specific promotion or activity.

c) A provision must be made for termination of the agreement if either party does not satisfactorily perform its obligations, or if other related conditions warrant termination of the agreement.

Transactional Relationships:

All transactional partnerships must identify MMI, specify a timeframe, specific action or activity. Partnership agreement stipulates that the co-venturer/corporate partner is responsible for their filing requirements.

Use of MMI Name and Marks:

Use of the MMI name and logo, or other identifying marks will be permitted by a person or organization only with the express prior written consent by MMI and subject to MMI graphic standards. The consent must be provided for each item and include the period of usage. MMI will not allow its name/logo or identifying marks to be used in any promotion or advertisement that names and compares competing products.

Statement of Relationship:

Whenever MMI is involved in a corporate relationship, an appropriate statement clarifying the relationship between MMI and the corporate partner and/or product should appear in accompanying materials, unless an exception is specifically granted or specified in this Policy. The statement must be conspicuous and accurate, and use terms that a reasonable person would understand. Unless approved otherwise, the MMI web address should be included in the statement.

Prior MMI Approval: All statements, illustrations, advertising, promotional or other materials using or referencing MMI, its marks or messages for use in conjunction with a corporate relationship are subject to the advance review and approval of MMI prior to release or use.

Privacy:

If personal information is collected, the MMI has separate written guidelines to protect the privacy of constituents that participate in any of its corporate relations activities, and defines ownership of collected data. Corporate partnerships will comply with MMI’s organizational guidelines.

Measurements of Mutual Success:

Where feasible, measurements are undertaken to assess the short and longer-term success of all cause-related endeavors. An evaluation of the relationship or program and its results to MMI, communities served or public should be conducted at the conclusion of the relationship or program and, when necessary or desirable, during the course of the relationship.

Disclosure:

MMI may choose to disclose the nature of a corporate relationship, including any financial benefit accruing to MMI resulting from the relationship, when requested. This disclosure may be via the public domain, MMI website, within MMI Board documents or other methods. Likewise, disclosure by a corporate partner is expected regarding a relationship with MMI, including any financial benefit to the corporate partner resulting from the relationship. Commercial or competitive information about a specific relationship which is customarily subject to nondisclosure restrictions may be treated as confidential when subject to reasonable nondisclosure agreements.

Transparency:

MMI will take reasonable steps to make its actions transparent and understandable to the public, especially where lack of transparency may reasonably lead to an appearance of a conflict of interest.

Consistency:

Partner Relationships should be consistent with organizational policies and procedures. Benefits will be consistent from program to program, partner to partner, and/or site to site.

Annual Audit:

MMI annually evaluates the total amount of corporate support as a percentage of total revenue, as well as, percentage of corporate support from a single corporate partner or industry segment to ensure an appropriate balance of contributions and a diverse revenue stream to MMI.

Compliance:

Corporate partners and MMI will be in compliance with all laws and regulations as applicable.


            
`,
            page_title: "Partner Relations",
        };
    },
};
</script>
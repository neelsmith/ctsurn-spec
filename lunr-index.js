
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["specification.html#the-canonical-text-services-urn-specification-version-20rc1"] = "The Canonical Text Services URN specification, version 2.0.rc.1";
index.add({
    url: "specification.html#the-canonical-text-services-urn-specification-version-20rc1",
    title: "The Canonical Text Services URN specification, version 2.0.rc.1",
    body: "# The Canonical Text Services URN specification, version 2.0.rc.1 #  **Content**:  This document defines version 2.0.rc.1 of the Canonical Text Services URN.  **Editors**:  Christopher Blackwell and Neel Smith, Center for Hellenic Studies Technical Working Group leads.  **Date**:  February, 2014.  **License**:  This specification is available under the terms of the Creative Commons Attribution-ShareAlike 4.0 International License, &lt;http://creativecommons.org/licenses/by-sa/4.0/deed.en_US&gt;.  "
});

documentTitles["specification.html#background"] = "Background";
index.add({
    url: "specification.html#background",
    title: "Background",
    body: "## Background ##   RFC2141 defines the goal of URNs as follows:  &gt; Uniform Resource Names (URNs) are intended to serve as persistent, location-independent, resource identifiers.  The Canonical Text Services URN (CTS URN) scheme defined here closely follows the syntactic requirements of a URN, but extends its goal to provide a system of persistent, *technology-independent* identifiers for texts and passages of texts.   Specifically, the semantics of the CTS URN scheme are recognized by implementations of the [Canonical Text Services](http://www.homermultitext.org/hmt-docs/specifications/cts/) protocol, but CTS URNs can be used in any system, digital or other, that can parse the syntax of CTS URN values according to the syntax and semantics of this specification.   "
});

documentTitles["specification.html#semantics-of-a-cts-citation"] = "Semantics of a CTS citation";
index.add({
    url: "specification.html#semantics-of-a-cts-citation",
    title: "Semantics of a CTS citation",
    body: "## Semantics of a CTS citation ##  There are three major components to a citation with CTS  URN version 2.0.rc.1:  a component identifying a naming authority, a component identifying a work hierarchy, and a component identifying a passage within the identified work.     The naming authority component is a single identifer;  systems using CTS URNs must be able to resolve this value to a unique URI.  The work component is a hierarchy representing texts as they are cited by scholars.  Conceptually, the work hierarchy partially overlaps with the Functional Requirements for Bibliographic Records (FRBR), but since FRBR aims to model bibliographic entries as they are cataloged by librarians, there are also noteworthy differences.  The work component begins with an identifier for any group of texts that are conventionally cited together in the naming authority's tradition.  Examples could be based on concepts such as \&quot;author\&quot; (e.g., the works of Mark Twain),  \&quot;geographic origin\&quot; (e.g., papyri from Oxyrhynchus), \&quot;subject matter\&quot; (e.g., Latin curse tablets), or any other grouping (e.g., a group of texts named the \&quot;Federalist Papers\&quot;).  This identifier *may* be  followed by an identifier for a specific notional work within that group, corresponding to the *work* level of FRBR.  This in turn *may* be followed with an identifier for a specific version of that work, either a translation or an edition, corresponding to the *expression* level of FRBR.  A version identifier *may* be followed by an identifier for a specific exemplar of the version, corresponding to the *item* level of FRBR.  (Note that there is no level of a CTS URN correponding to the FRBR *manifestation*.)  The passage component is a hierarchy of one or more levels expressing a logical citation scheme applying to all versions of a text.  A poem might be cited by the single unit of \&quot;poetic line.\&quot;  A prose work might be cited by a hierarchy such as \&quot;book/chapter/section/subsection.\&quot;  Passage references at any level of the text's citation hierarchy *may* identify either a single citable node or a range indicated by the first and last nodes of the range.  If the work component of the CTS URN is at the version or exemplar level, reference to a single citable node *may* be extended with indexed occurrences of a substring or a range of substrings; in a reference to a range of nodes, either or both of the first and last nodes *may* be extended in the same way.  Indexed substring references are permitted only with URNs at the version or exemplar level because they are inherently language-specific.   "
});

documentTitles["specification.html#syntax-of-a-cts-urn"] = "Syntax of a CTS URN";
index.add({
    url: "specification.html#syntax-of-a-cts-urn",
    title: "Syntax of a CTS URN",
    body: "## Syntax of a CTS URN   "
});

documentTitles["specification.html#overall-structure-of-a-cts-urn"] = "Overall structure of a CTS URN";
index.add({
    url: "specification.html#overall-structure-of-a-cts-urn",
    title: "Overall structure of a CTS URN",
    body: "### Overall structure of a CTS URN All URNs *must* begin with the string `urn:` followed by a protocol identifier (the \&quot;urn namespace identifier\&quot;), followed by a  colon (\&quot;:\&quot;, Unicode x003a).  The protocol identifier for the CTS URN *must* be `cts`.  The rest of the CTS URN consists of a CTS namespace, a work component, and a passage component.    The CTS namespace *must* be separated from the work component by a colon, and the work component *must* be separated from the passage component by a colon.  A value for the CTS namespace and for the work component is required.  The value of the passage component *may* be a null string; in this case, the work component *must* still be separated from the null string by a colon.  The top-level structure of a CTS URN could be summarized as      urn:cts:CTSNAMESPACE:WORK:PASSAGE  where `CTSNAMESPACE` and `WORK` are required values, `PASSAGE` is an optional value, and the other characters are literals.  "
});

documentTitles["specification.html#the-work-component"] = "The work component";
index.add({
    url: "specification.html#the-work-component",
    title: "The work component",
    body: "### The work component ###  The work component consists of one to four parts.  Each part *must* be separated from a following part by a full stop  (\&quot;.\&quot;, Unicode x002e).  A full stop *must not* be appended to the part value if there is no following part.  The value for the first part of the work component is mandatory, and *must* be a valid value for a textgroup in the URN's CTS namespace.  The second part of the work component is optional; its value *must* be a valid value for a notional work within the parent textgroup.  The third part of the work component is allowed if the URN also includes a value for a work, and *must* be a valid value for a version (edition or translation) in the parent notional work.  The fourth part of the work component is allowed if the URN also includes a value for a version, and *must* be a valid value for an exemplar in the parent version.  The structure of the work component of a CTS URN could be summarized as      TEXTGROUP.WORK.VERSION.EXEMPLAR  where `TEXTGROUP` is a mandatory value, `WORK`, `VERSION` and `EXEMPLAR` are optional values, and the remaining characters are literals.  "
});

documentTitles["specification.html#the-passage-component"] = "The passage component";
index.add({
    url: "specification.html#the-passage-component",
    title: "The passage component",
    body: "### The passage component  The passage component *may* be a null string.  It *may* have a non-null value only if the work component includes two or more parts.  If the passage component is not null, it *must* identify either a citable node of the text, or a range of citable nodes.    "
});

documentTitles["specification.html#passage-reference-identifying-a-citable-node"] = "Passage reference identifying a citable node";
index.add({
    url: "specification.html#passage-reference-identifying-a-citable-node",
    title: "Passage reference identifying a citable node",
    body: "#### Passage reference identifying a citable node A node reference consists of one or two parts.  The first part is mandatory, and identifies a citable node in the text.  The second part is optional and identifies a subsection of the citable node.  If the node reference includes a subsection, the node reference and subsection *must* be separated by the \&quot;at\&quot; sign (\&quot;@\&quot;, Unicode x0040).  If the node reference includes a subsection, the value of the subsection *must not* be null.  The overall structure of a node reference could be summarized as       CITABLENODE@SUBSECTION  where `CITABLENODE` is mandatory, and `@SUBSECTION` is optional.   "
});

documentTitles["specification.html#citable-node-identifier"] = "Citable node identifier";
index.add({
    url: "specification.html#citable-node-identifier",
    title: "Citable node identifier",
    body: "##### Citable node identifier #####  Reference to a citable node consists of one or more parts.  Each part *must* be separated from a following part by a full stop.  A full stop *must not* be appended to the part value if there is no following part.  The value for the first part *must* be a valid value in the top level of the text's citation hierarchy.  The value of any following parts *must* be valid values at the corresponding level of the citation hierarchy within the parent node of the text.  There is no limit on the depth of a text's citation hierarchy, and therefore no limit on the number of parts in a node reference.  "
});

documentTitles["specification.html#subsection-of-a-citable-node"] = "Subsection of a citable node";
index.add({
    url: "specification.html#subsection-of-a-citable-node",
    title: "Subsection of a citable node",
    body: "##### Subsection of a citable node #####    A subreference consists of one or two subreference elements.   If there are two subreference elements, they *must* be separated by the hyphen-minus sign (\&quot;-\&quot;, Unicode x002D).  Each subreference element consists of a mandatory literal string and an optional index value.  The value of the literal string *must* be span of text within the cited passage.  If an index value is include, it *must* be enclosed in square brackets (\&quot;[\&quot;, Unicode x005B, and \&quot;]\&quot;, Unicode x005D), and must evaluate to a positive integer.    The overall structure of a subreference element could be summarized as   STRING[INDEX]  where `STRING` is required and `[INDEX]` is optional.  Note that if no index value is included, the meaning of the subreference element `STRING`  equivalent to  subreference element `STRING[1]`.  A subreference range is identified by an ordered pair of subsection elements.  The two node references *must* be separated by the hyphen-minus sign (\&quot;-\&quot;, Unicode x002D).  The value of each subreference element *must* identify a subsection of the cited node.  The value of the first subreference element must precede the value of the second subreference element in the cited node.   "
});

documentTitles["specification.html#passage-reference-identifying-a-range-of-citable-nodes"] = "Passage reference identifying a range of citable nodes";
index.add({
    url: "specification.html#passage-reference-identifying-a-range-of-citable-nodes",
    title: "Passage reference identifying a range of citable nodes",
    body: "#### Passage reference identifying a range of citable nodes  Ranges of two or more nodes are identified by an ordered pair of node references as previously defined. The value for the first node reference *must* identify the first node in the range; the value for the second node reference *must* identify the second node in the range.  The two node references *must* be separated by the hyphen-minus sign (\&quot;-\&quot;, Unicode x002D).  The structure of a passage reference could be summarized as       NODE1-NODE2  where each of  `NODE1` and `NODE2`is a valid reference to a citable node as previously defined, and the hyphen is literal.    "
});

documentTitles["specification.html#character-set"] = "Character set";
index.add({
    url: "specification.html#character-set",
    title: "Character set",
    body: "### Character set ###  CTS URNs *must* be expressed in the Unicode character set.    "
});

documentTitles["specification.html#reserved-code-points"] = "Reserved code points";
index.add({
    url: "specification.html#reserved-code-points",
    title: "Reserved code points",
    body: "#### Reserved code points ####  Following the generic URN syntax, CTS URN reserves the use of the following code points:  they *must not* be included in the data components of a CTS URN.  -  the percent sign (\&quot;%\&quot; , Unicode x0025) - the solidus (\&quot;/\&quot; , Unicode x002F) - the question mark (\&quot;?\&quot; , Unicode x003F) - the number sign (\&quot;#\&quot;, Unicode x0023)  The CTS URN specification additionally reserves the following code points, and limits their usage to the syntactic functions previously specifie:  - the colon (\&quot;:\&quot;, Unicode x003A) - the full stop (\&quot;.\&quot;, Unicode x002E)  - the \&quot;at\&quot; sign (\&quot;@\&quot;, Unicode x0040) - the hyphen-minus sign (\&quot;-\&quot;, Unicode x002D) - the left square bracket (\&quot;[\&quot;, Unicode x005B) - the right square bracket (\&quot;]\&quot;, Unicode x005D)  Note that the generic URN specification excludes the left and right square bracket code points, whereas in CTS URNs, they are used, but their use is reserve.  "
});

documentTitles["specification.html#excluded-code-points"] = "Excluded code points";
index.add({
    url: "specification.html#excluded-code-points",
    title: "Excluded code points",
    body: "#### Excluded code points Following the generic URN specification, CTS URNs *exclude* the following code points:  - all code points &lt; x0020 - the reverse solidus (\&quot;\\&quot;, Unicode x005C) - the quotation mark (`\&quot;`, Unicode x0022)  - the ampersand (\&quot;&amp;\&quot; , Unicode x0026) - the less-than sign (\&quot;&lt;\&quot;, Unicode x003C) - the greater-than sign (\&quot;&gt;\&quot; , Unicode x003E) - the circumflex accent (\&quot;^\&quot; , Unicode x005E) - the grave accent (\&quot;`\&quot; , Unicode x0060) - the vertical line (\&quot;|\&quot; , Unicode x007C) - the left curly bracket  (\&quot;{ , Unicode x007B) - the right curly bracket  (\&quot;{ , Unicode x007D) - the tilde  (\&quot;~ , Unicode x007E)      "
});

documentTitles["specification.html#examples-with-comments"] = "Examples with comments";
index.add({
    url: "specification.html#examples-with-comments",
    title: "Examples with comments",
    body: "## Examples with comments  The following examples illustrate use URN values in the text corpus of the Homer Multitext published as  \&quot;Homer Multitext project archive, 2014, volume 1\&quot;.   The CTS namespace abbreviation is used throughout these examples to refer to naming authority uniquely identified in that publication with the URI `http://chs.harvard.edu/ctsns/greekLit`.  A valid CTS URN identifying the text group \&quot;Homer poetry\&quot;:      urn:cts:greekLit:tlg0012:  A valid CTS URN identifying the *Iliad*:      urn:cts:greekLit:tlg0012.tlg001:  A valid CTS URN identifying a specific English translation of the *Iliad*:      urn:cts:greekLit:tlg0012.tlg001.hmt01:  The *Iliad* is cited in a two-level hierarchy of \&quot;book\&quot; and \&quot;line\&quot;.  A valid CTS URN identifying one citable node line in the English translation:      urn:cts:greekLit:tlg0012.tlg001.hmt01:10.1  A valid CTS URN identifying one citable node at the top level of the citation hierarchy, i.e., all of book 10:      urn:cts:greekLit:tlg0012.tlg001.hmt01:10  A valid CTS URN identifying a range of lines in the English translation:      urn:cts:greekLit:tlg0012.tlg001.hmt01:10.1-10.10  Two semantically equivalent CTS URNs identifying the first occurrence of a substring within a citable node:      urn:cts:greekLit:tlg0012.tlg001.hmt01:10.4@Atreus[1]     urn:cts:greekLit:tlg0012.tlg001.hmt01:10.4@Atreus      A valid CTS URN identifying the second occurrence of substring in a citable node:      urn:cts:greekLit:tlg0012.tlg001.hmt01:10.1@the[2]  A valid CTS URN identifying a range of text spanning multiple lines:      urn:cts:greekLit:tlg0012.tlg001.hmt01:10.4@Atreus-10.10  A valid CTS URN identifying an equivalent range of text:      urn:cts:greekLit:tlg0012.tlg001.hmt01:10.4@Atreus-10.10@trembling.       "
});

documentTitles["specification.html#links"] = "Links";
index.add({
    url: "specification.html#links",
    title: "Links",
    body: "## Links  - Maven settings for using the release version of this specification and its schemas from a maven client:      - group: `org.homermultitext`     - artifact: `ctsurn_spec`     - version: `2.0.rc.1` -  Nexus repository to proxy this release:  &lt;http://beta.hpcc.uh.edu/nexus/content/repositories/releases&gt; -  Known mirrors of this specification:     - from the Homer Multitext project:  &lt;http://www.homermultitext.org/hmt-docs/specifications/ctsurn&gt;     - from Furman University: &lt;http://folio.furman.edu/projects/citedocs/ctsurn&gt;     - from the College of the Holy Cross:  &lt;http://shot.holycross.edu/hmt/hmt-docs/specifications/ctsurn&gt; - RFC2141, \&quot;URN Syntax\&quot;: &lt;http://www.ietf.org/rfc/rfc2141.txt&gt;  - The Canonical Text Services protocol specification: &lt;http://www.homermultitext.org/hmt-docs/specifications/cts&gt;  - Report of the IFLA Study Group on the Functional Requirements for Bibliographic Records (FRBR): &lt;http://www.ifla.org/publications/functional-requirements-for-bibliographic-records&gt;  "
});

documentTitles["specification.html#acknowledgments"] = "Acknowledgments";
index.add({
    url: "specification.html#acknowledgments",
    title: "Acknowledgments",
    body: "## Acknowledgments ##  The authors would especially like to acknowledge contributions from Gabriel Weaver in developing the URN notation. "
});




/**
 * <tag1 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *     <tag2 id="abcd" data-text-id="unique data" attr3="value3" attr4="value4">
 *         <subTag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subTag>
 *         <tag3>Not Unique Text
 *              <subTag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subTag>
 *         </tag3>
 *         <tag11 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 2</tag11>
 *         <tag21 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 3</tag21>
 *         <tag31 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 31</tag31>
 *     </tag2>
 *     <tag4 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *         
 *         <a attr1="value1" attr2="value2">Unique Text 4</a>
 *     </tag4>
 *     <tag6 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *          <tag7 attr1="value1" attr2="value2" attr3="value3" attr4="value4"></tag7>
 *     </tag6>
 * </tag1>
 * 
 * 
 * parent-tag   ->  tag1 is parent of tag2, tag4, tag6
 *                  tag6 is parent tag7
 *                  tag4 is parent of a
 *                  tag2 is parent of tag3, tag11, tag21, tag31
 *                  tag11 is parent of -
 *                  tag3 is parent of subTag
 *                  tag21 is parent of -
 * 
 *                  subTag -> tag3 -> tag2 -> tag1
 *                  a -> tag4 -> tag1
 * children-tag
 * sibling-tag      tag2, tag4, tag6 are siblings (tag1)
 *                  subTag is child of tag3
 *                  tag11, tag21 are siblings (tag2)
 * 
 * following-sibling (sibling starting-tags which appear in the dom after the tag)
 * following sibling of tag11   ->  tag21, tag31
 * following-sibling of a-tag   ->  -
 * 
 * preceding-sibling (sibling starting-tags which appear in the dom before the tag)
 * preceding sibling of tag11   ->  tag3
 * preceding-sibling of a-tag   ->  -
 * 
 * following (all starting-tags appear in the dom after the tag)
 * following of tag11   ->  tag21, tag31, tag4, a, tag6, tag7
 * following of a-tag   ->  tag6, tag7
 * 
 * preceding (all starting-tags appear in the dom before the tag)
 * preceding of tag11   ->  subTag, tag3, tag2, tag1
 * preceding of a-tag   ->  tag4, tag31, tag21, tag11, subTag, tag3, tag2, tag1
 * 
 */
/* To find webElement
 function: $
 */

// Functions to interact with webElement:
/**
 * 
 * 
 * 1. type
 *      function: setValue()
 *      input: String-input which is the text that we want to type
 * 2. click
 *      function: click()
 * 3. to find if webElement is enabled 
 *      function: isEnabled()
 *      if the webElement is enabled
 *          function returns true
 *        otherwise
 *          function returns false
 * 4. to find if a webElement is selected or not
 *      function: isSelected();
 *      if the webElement is selected
 *          function returns true
 *        otherwise
 *          function returns false
 * 5. to find if a webElement is displayed or not
 *      function: isDisplayed();
 *      if the webElement is displayed
 *          function returns true
 *        otherwise
 *          function returns false
 * 
 * 6. to get the value of any attribute
 *      function: getAttribute()
 *      input: attribute-name
 * 
 * 7. To get the text value
 *      function: getText()
 * 
 */

// Locator strategies:
/**
 * Locators: way to reach/find a webElement in DOM
 * 
 * 1. using id-attribute
 *      id-attribute is always going to be unique for the webpage (in the DOM)
 *      To check if id-value is unique, In chropath -> //*[@id="id-value"]
 * 
 *      const webElement = await $('#idValue');
 * 
 * 2. Using other attributes value insead of id-attribute
 *      To check if any-attribute has unique value, In chropath -> //tagName[@attrName="attrValue"]
 *      NOTE: Attributs value cannot have spaces (If want to use attributes value with spaces then refer to xpath)
 * 
 *      const webElement = await $('tagName[attrName=attrValue]')
 * 
 * 3. Using the text-Value
 *      To check if the text-value with webElement is unique, in chropath -> //tagName[text() = 'text value']
 * 
 *      const webElement = $('tagName=text value')
 * 
 * 4. Using partial attribute's value 
 *      To check if the partial attributes value is unique, In chropath -> //tagName[contains(@attrName, 'partialAttrValue')]
 *      Note: Attributes partial value cannot have spaces (If you wat to use attributes partial value with spaces then refer xpath)
 * 
 *      const webElement = await $('tagName[attrName*=partialAttrValue]');
 * 
 * 5. Using partial text value
 *      To check if the partial text value is unique, In chropath -> //tagName[contains(text(), 'partial text value')]
 * 
 *      const webElement = await $('tagName*=partial text value');
 * 
 * 6. Using link-text
 *      To check if the link text is unique, In chropath -> //a[text()='Link text']
 * 
 *      const webElement = await $('=Link text');
 * 
 * 7. Using partial link-text
 *      To chck if the link partial-text is unique, In chropath -> //a[contains(text(), 'partial link text')]
 * 
 *      const webElement = await $('*=partial link text');
 * 
 * 8. Using tagName
 *      To check if the tagName with webElement is unique, In chropath -> //tagName
 *  
 *      const webElement = await $('<tagName>')
 * 
 * 
 */
/**
 * 9. Xpath
 *      Types:
 *      1. Absolute Xpath
 *      a. always starts with rootTag/html tag
 *      b. always starts with / (single slash)
 *      c. not reliable, any change in webpage may break xPath
 * 
 *      2. Relative Xpath
 *      a. always starts with // (double slash)
 *      b. reliable beacuse we use the tagName, attribute, or text_value in any combination to create xPath
 * 
 *      -> Direct Xpath (Simple Xpath)
 *      -> Indirect Xpath (Advanced Xpath)
 */
/**
 * Direct xpath (simple xPath)
 * 
 * 1. Using attributes value
 *      //tagName[@attrName="attr value"]
 *      find the tag(tagName) which has attribute (attrName) with value equals to "attr value"
 * 
 *      const webElement = await $('//tagName[@attrName="attr value"]')
 * 
 * 2. Using text value 
 *      //tagName[text()="text value"]
 *      find the tag(tagname) which has text equals to "text value"
 * 
 *      const webElement = await $('//tagName[text()="text value"]')
 * 
 * 3. Using partial attributes value (function -> contains())
 *      //tagName[contains(@attrName, "partial attr value")]
 *      find the tag(tagName) which has attribute(attrName) contains "partial attr value"
 * 
 *      const webElement = $('//tagName[contains(@attrName, "partial attr value")]')
 * 
 * 4. Using partial text value (function -> contains())
 *      //tagName[contains(text(), "partial text value")]
 *      find the tag(tagName) where text contains "partial text value"
 * 
 *      const webElement = $('//tagName[contains(text(), "partial text value")]')
 * 
 * 5. Using starting portion of attributes value (function -> starts-with())
 *      //tagName[starts-with(@attrName, "starting attr value")]
 *      find the tag(tagName) in DOM where attribute(attrName) value starts with "stating attr value"
 * 
 *      const webElement = $('//tagName[starts-with(@attrName, "starting attr value")]')
 * 
 * 6. Using starting portion of text value (function -> starts-with)
 *      //tagName[starts-with(text(), "starting text value")]
 *      find the tag(tagName) in DOm where text-value starts with "starting text value"
 * 
 *      const webElement = $('//tagName[starts-with(text(), "starting text value")]')
 *      
 *      
 */

/**
 * Link:    always has an a-tag
 *          text of a link is called link Link-Text
 *          after clicking the link, user should land on which webPage that is defined in href-attribute.         
 */

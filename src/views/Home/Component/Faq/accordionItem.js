import React from "react";
import parse  from "html-react-parser"

const AccordionItem = ({
  active,
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className={`faqQuestion ${active}`} key={item.question}>
    <dt>
      <button type="button"
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}Desc`}
        data-qa="faqQuestionButton"
        className={`faqQuestionButton ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.question}
      </button>
    </dt>
    <dd>
      <div
        id={`faq${index + 1}Desc`}
        data-qa="faqDesc"
        className={`faqDesc ${showDescription}`}
      >
        {parse(item.answer)}
      </div>
    </dd>
  </div>
);
export default AccordionItem;
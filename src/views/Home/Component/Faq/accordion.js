import React, { useState } from "react";
import AccordionItem from "./accordionItem";


const Accordion = ({ questionsAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "showDescription" : "";
    const fontWeightBold = index === activeIndex ? "fontWeightBold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    const active = index === activeIndex ? "active" : "";
    return (
      <AccordionItem
        active = {active}
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        key={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <dl className="faqList">{renderedQuestionsAnswers}</dl>
    </div>
  );
};

export default Accordion;
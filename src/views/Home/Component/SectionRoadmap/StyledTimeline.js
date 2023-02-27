import styled from "styled-components";

export const Oval = styled.div`
  width: 64px;
  height: 64px;
  padding: 19px 18px 18px 19px;
  border-radius: 50%;
  box-shadow: inset 8px 8px 40px 0 rgba(9, 13, 20, 0.4), inset -4px -4px 8px 0 rgba(224, 224, 255, 0.04), inset 0 1px 1px 0 rgba(9, 13, 20, 0.4);
  background-image: linear-gradient(to bottom, #090d14, #282a2e 53%, #2d2f33);
`;

export const InnerOval = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  opacity: 0.6;
  background-color: grey;
`;

export const ActiveOval = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 221px;
  padding: 19px 18px 18px 19px;
  box-shadow: 0 8px 8px -4px rgba(69, 121, 245, 0.12), 0 16px 24px 0 rgba(69, 121, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(69, 121, 245, 0.24);
  background-image: linear-gradient(135deg, #00ffaa, #4579f5 54%, #9c42f5 100%);
  border-radius: 50%;
`;

export const ActiveInnerOval = styled.div`
  width: 27px;
  height: 27px;
  background-color: #ffffff;
  border-radius: 50%;
}`;

export const Milestone = styled.div`
    width: 255px;
    text-align: left;
    margin-left: -35px;
    font-family: Montserrat;
    position: absolute;
    top: -130px;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #ffffff;
`;
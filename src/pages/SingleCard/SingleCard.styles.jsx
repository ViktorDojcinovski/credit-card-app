import styled from "styled-components";

import CardForm from "../../components/CardForm/CardForm.component";

const CardWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const StyledCardForm = styled(CardForm)`
  display: flex;
  width: 400px;
  background-color: #eee;
  padding: 20px;
  box-sizing: border-box;
`;

const UserNameArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardNumberArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledLabelsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px 40px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: left;
  box-sizing: border-box;
`;

export {
  CardWrapper,
  StyledCardForm,
  StyledLabelsArea,
  UserNameArea,
  CardNumberArea,
};

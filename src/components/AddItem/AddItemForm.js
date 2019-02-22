import React from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import { P, fontSize } from "../../styles/typography";
import { GlobalContext } from "../../Context";

import "rc-slider/assets/index.css";
import Button from "../Global/Button";
import { colors, mediaSize } from "../../styles/styles";
import "./Slider.css";
import AddItemType from "./AddItemType";
import { itemTypes } from "../../utils";

const FormContainer = styled.div`
  max-width: 20rem;
  margin: 0 auto;
  @media screen and (min-width: ${mediaSize.medium}) {
    margin: 0;
  }
`;

const FormLabel = styled(P)`
  margin: 0 0 1.5rem;
  font-size: ${fontSize.base};
  font-weight: 500;
  line-height: 1;
`;

const InputLabel = styled.label`
  display: block;
  font-size: ${fontSize.extraSmall};
  line-height: 1;
  letter-spacing: 0.05em;
  font-weight: 400;
  padding: 0 4px;
  margin-bottom: 0.5rem;
`;

const InputText = styled.input`
  font-size: ${fontSize.body};
  line-height: 1;
  padding: 4px 4px 6px;
  box-shadow: inset 0 -1px 0 0 ${colors.text.light};
  width: 100%;
  margin-bottom: 1rem;

  &:focus {
    box-shadow: inset 0 -2px 0 0 ${colors.text.light};
  }

  ${props =>
    props.status === `error` &&
    `box-shadow: inset 0 -1px 0 0 ${colors.warning};`}
`;

const ServingDisplay = styled(P)`
  margin: 0.5rem 0 1rem;
`;

const Form = styled.form``;

const ItemTypesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row wrap;
`;

const Message = styled.p`
  margin: 0 0 2rem;
  font-size: ${fontSize.extraSmall};
  line-height: 1;
  letter-spacing: 0.05em;
  font-weight: 500;
  color: ${props => (props.error ? colors.warning : colors.text.regular)};
`;

class AddItemForm extends React.Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.state = {
      formStatus: null,
      itemName: ``,
      itemServings: 0,
      itemType: null
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      formStatus: null
    });
  };

  handleItemSelect = event => {
    const value = event.target.value;
    this.setState({ itemType: value, formStatus: null });
  };

  handleSlider = event => {
    this.setState({ itemServings: event, formStatus: null });
  };

  addItem = event => {
    event.preventDefault();
    const isValid = this.validateForm();
    const item = {};
    item.name = this.state.itemName;
    item.type = this.state.itemType;
    item.servings = this.state.itemServings;

    if (isValid) {
      // Send up to context
      this.props.context.handleSubmit(item);
      // Clear theform
      event.currentTarget.reset();
      this.formRef.current.reset();
    } else {
      console.warn("something screwed up, bronamath.");
    }
  };

  validateForm = () => {
    if (this.state.itemName && this.state.itemServings && this.state.itemType) {
      this.setState({ formStatus: `success` });
      return true;
    } else {
      console.log(this.state);
      if (!this.state.itemType) {
        this.setState({ formStatus: `errorType` });
      } else if (!this.state.itemName) {
        this.setState({ formStatus: `errorName` });
      } else if (!this.state.itemServings) {
        this.setState({ formStatus: `errorServings` });
        return;
      }
    }
  };

  render() {
    console.log();
    return (
      <FormContainer>
        <FormLabel>Pick an Item Below</FormLabel>
        <Form ref={this.formRef} onSubmit={this.addItem}>
          <ItemTypesContainer>
            {itemTypes.map((type, i) => (
              <AddItemType
                key={i}
                id={i}
                type={type}
                selected={type === this.state.itemType ? true : null}
                handleItemSelect={this.handleItemSelect}
              />
            ))}
          </ItemTypesContainer>
          {this.state.formStatus === `errorType` && (
            <Message error>Please select the type of item</Message>
          )}

          <InputLabel htmlFor="ItemName">Name of Item</InputLabel>
          <InputText
            type="text"
            name="itemName"
            status={this.state.formStatus === `errorName` && `error`}
            placeholder="Mouthwatering carbs"
            value={this.state.itemName}
            onChange={this.handleChange}
          />
          {this.state.formStatus === `errorName` && (
            <Message error>Please enter a name for your Item</Message>
          )}

          <InputLabel style={{ marginTop: `1rem` }}>
            For how many people?
          </InputLabel>
          <ServingDisplay>
            {this.state.itemServings ? this.state.itemServings : `0`}
          </ServingDisplay>

          <Slider
            name="itemServings"
            className="form-slider"
            min={0}
            max={20}
            onChange={this.handleSlider}
          />

          {this.state.formStatus === `errorServings` && (
            <Message error style={{ marginTop: `1rem` }}>
              Please enter a name for your Item
            </Message>
          )}
          <Button rounded large style={{ margin: `2rem auto 0` }} type="submit">
            {this.state.formStatus === `success` ? `Submitted!` : `Add an Item`}
          </Button>
        </Form>
      </FormContainer>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <GlobalContext.Consumer>
    {context => <AddItemForm {...props} context={context} ref={ref} />}
  </GlobalContext.Consumer>
));

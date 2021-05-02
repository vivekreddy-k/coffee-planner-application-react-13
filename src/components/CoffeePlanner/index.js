// Write your code here.
import './index.css'
import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion/index'

class CoffeePlanner extends Component {
  /* create a state with 2 value that keep changing according to user input  */
  state = {
    selectedCoffeePlan: ['', '', '', '', ''],
    showSummary: false,
  }

  /* take the input from QuestionOption component and update the values in the state 
  so here we will set value for selectedCoffeePlan array in the state 
  we cant directly update state so we use object destructuring 
  */
  updateSelectedCoffeePlan = (questionType, optionTitle) => {
    const {coffeePlannerData} = this.props
    const {selectedCoffeePlan} = this.state
    const questionIndex = coffeePlannerData.findIndex(
      eachItem => questionType === eachItem.questionType,
    )
    const newSelectedCoffeePlan = [...selectedCoffeePlan]
    newSelectedCoffeePlan[questionIndex] = optionTitle
    this.setState({selectedCoffeePlan: [...newSelectedCoffeePlan]})
    this.setState({showSummary: false})
  }

  /*  here we take values from selectedCoffeePlan state and send these values to QuestionOption
we get  the questionType input from CoffeePlannerQuestion to get the index of selectedCoffeePlan values
the value from the index is passes to QuestionOption
*/

  getSelectedOption = questionType => {
    const {coffeePlannerData} = this.props
    const {selectedCoffeePlan} = this.state
    const questionIndex = coffeePlannerData.findIndex(
      eachItem => questionType === eachItem.questionType,
    )
    return selectedCoffeePlan[questionIndex]
  }

  /*  show summary */

  /** when ever button is clicked set value to true so that it show text */
  onClickButton = () => {
    this.setState({showSummary: true})
  }

  /* The filter() method creates a new array with all elements that pass the
    test implemented by the provided function.  */

  isAllOptionsSelected = () => {
    const {selectedCoffeePlan} = this.state
    const selectedCoffeePlanItems = selectedCoffeePlan.filter(
      eachItem => eachItem === '',
    )
    return selectedCoffeePlanItems.length === 0
  }

  renderSummarySection = () => {
    const {selectedCoffeePlan, showSummary} = this.state

    if (showSummary) {
      return (
        <div className="summary-container">
          {this.isAllOptionsSelected() ? (
            <p className="summary">
              “I Drink my coffee as
              <span className="selected-value"> {selectedCoffeePlan[0]}</span>,
              with a
              <span className="selected-value"> {selectedCoffeePlan[1]} </span>
              type of bean.
              <span className="selected-value"> {selectedCoffeePlan[2]} </span>
              ground ala
              <span className="selected-value"> {selectedCoffeePlan[3]}</span>,
              sent to me
              <span className="selected-value"> {selectedCoffeePlan[4]}</span>.”
            </p>
          ) : (
            <p className="summary">
              Kindly select options for all the questions.
            </p>
          )}
        </div>
      )
    }
    return null
  }

  renderCoffeePlannerQuestion = () => {
    const {coffeePlannerData} = this.props
    return (
      <ul className="coffee-planner-question-list">
        {coffeePlannerData.map(eachItem => (
          <CoffeePlannerQuestion
            key={eachItem.id}
            questionsData={eachItem}
            updateSelectedCoffeePlan={this.updateSelectedCoffeePlan}
            getSelectedOption={this.getSelectedOption}
          />
        ))}
      </ul>
    )
  }

  renderCoffeeBodySection = () => (
    <div className="coffee-body-section">
      {this.renderCoffeePlannerQuestion()}
      <div className="button-container">
        <button
          className="create-button"
          type="button"
          onClick={this.onClickButton}
        >
          Create my plan!
        </button>
      </div>
      {this.renderSummarySection()}
    </div>
  )

  renderHeaderSection = () => (
    <div className="app-header">
      <div className="header-content">
        <h1 className="heading">Create a Plan</h1>
        <p className="header-description">
          We offer an assortment of the best artesian coffees from the globe
          delivered fresh to the door create your plan with this
        </p>
      </div>
    </div>
  )

  render() {
    return (
      <div className="app-container">
        {this.renderHeaderSection()}
        {this.renderCoffeeBodySection()}
      </div>
    )
  }
}

export default CoffeePlanner

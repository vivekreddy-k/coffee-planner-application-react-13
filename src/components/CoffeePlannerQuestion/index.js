// Write your code here.
import './index.css'
import {Component} from 'react'
import QuestionOption from '../QuestionOption'

class CoffeePlannerQuestion extends Component {
  render() {
    const {
      questionsData,
      updateSelectedCoffeePlan,
      getSelectedOption,
    } = this.props

    const {questionTitle, optionsData, questionType} = questionsData
    const SelectedOption = getSelectedOption(questionType)

    return (
      <li className="coffee-planner-question-item">
        <h1 className="coffee-planner-question-heading">{questionTitle}</h1>
        <ul className="question-option-list">
          {optionsData.map(eachItem => (
            <QuestionOption
              key={eachItem.id}
              optionData={eachItem}
              questionType={questionType}
              updateSelectedCoffeePlan={updateSelectedCoffeePlan}
              SelectedOption={SelectedOption}
            />
          ))}
        </ul>
      </li>
    )
  }
}
export default CoffeePlannerQuestion

// Write your code here.
import './index.css'
import {Component} from 'react'

const whiteCup =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
const greenCup =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
class QuestionOption extends Component {
  onClickQuestionOption = () => {
    const {optionData, questionType, updateSelectedCoffeePlan} = this.props
    const {optionTitle} = optionData
    updateSelectedCoffeePlan(questionType, optionTitle)
  }

  render() {
    const {optionData, SelectedOption} = this.props
    const {optionTitle, description} = optionData
    const isOptionSelected = optionTitle === SelectedOption
    const optionClassName = isOptionSelected
      ? 'question-option-item selected-option'
      : 'question-option-item'
    const cardTitleClassName = isOptionSelected
      ? 'card-container-header-heading selected-title'
      : 'card-container-header-heading'
    const coffeeCupUrl = isOptionSelected ? whiteCup : greenCup
    const cardDescription = isOptionSelected
      ? 'card-description selected-description'
      : 'card-description'
    return (
      <li className={optionClassName} onClick={this.onClickQuestionOption}>
        <div className="card-container">
          <div className="card-container-header">
            <h1 className={cardTitleClassName}>{optionTitle}</h1>
            <img className="coffee-cup" alt="tea-cup" src={coffeeCupUrl} />
          </div>
          <p className={cardDescription}>{description}</p>
        </div>
      </li>
    )
  }
}
export default QuestionOption

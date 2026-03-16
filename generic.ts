//14th case study
class FeedbackBox<T> {
  private feedbacks: T[] = [];

  addFeedback(feedback: T): void {
    this.feedbacks.push(feedback);
  }

  getAllFeedback(): T[] {
    return [...this.feedbacks];
  }
}
const quizFeedback = new FeedbackBox<string>();
quizFeedback.addFeedback("Nice Quiz");

function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}
const firstQuizFeedback = getFirstItem(quizFeedback.getAllFeedback());
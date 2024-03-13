class Feedback {
  constructor(source, container = '.feedback-flex') {
    this.container = container;
    this.source = source;
    this.feedbackArray = [];
    this.feedbackIdArray = [];
    this.nextId = 0;
    this._init(this.source);
  }

  _init(source) {
    $('#submit').click(()=>{
      this.createNewFeedback();
    });
    fetch(source)
      .then(result => result.json())
      .then(data => {
        for (let item of data) {
          this.feedbackArray.push(item);
          this.feedbackIdArray.push(item.id);
          this.feedbackIdArray.sort((a, b) => {
            return a - b;
          });
          this.nextId = this.feedbackIdArray[this.feedbackIdArray.length - 1] + 1;
          this._render(item);
        }
      })
  }

  createNewFeedback() {
    let $fullDate = new Date();
    let $date = `${$fullDate.getHours()}:${$fullDate.getMinutes()}:${$fullDate.getSeconds()} ${$fullDate.getDate()}/${$fullDate.getMonth() + 1}/${$fullDate.getFullYear()}`;
    let $newItem = {
      id: this.nextId,
      author: $('#name')[0].value,
      date: $date,
      text: $('#feedback-text')[0].value,
      accepted: 0
    };
    this.feedbackArray.push($newItem);
    this._render($newItem);
    $('#name')[0].value = '';
    $('#feedback-text')[0].value = '';
  }

  _render(item) {
    let $itemContainer = $(`<div/>`, {
      class: "feedback-item"
    });
    let $itemContainerText = $(`<div/>`, {
      class: "text"
    });
    let $itemContainerForAuthor = $(`<div/>`, {
      class: "author-flex"
    });

    let $itemContainerTextAuthor = $(`<div/>`, {
      html: item.author
    });
    let $itemContainerTextDate = $(`<div/>`, {
      class: "date",
      html: item.date
    });
    let $itemContainerTextText = $(`<p/>`, {
      class: "text",
      html: item.text
    });

    let $accept = $(`<i class="fas fa-check"></i>`);
    $accept.click(() => {
      $itemContainer.removeClass('not-accepted');
      $accept.remove();
    });


    $itemContainerForAuthor.append($itemContainerTextAuthor);
    $itemContainerForAuthor.append($itemContainerTextDate);
    $itemContainerText.append($itemContainerForAuthor);
    $itemContainerText.append($itemContainerTextText);
    $itemContainer.append($itemContainerText);

    if (item.accepted === 0) {
      $itemContainer.append($accept).addClass('not-accepted');
    }

    $(this.container).append($itemContainer);


  }


}
export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
    value: author.id,
    text: author.firstName + ' ' + author.lastName
  };//end return
});//end return author
}//end authorsFormattedForDropdown()

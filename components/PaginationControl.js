import { Pagination, Row, Spacer } from "@nextui-org/react"

export const PaginationControl = ({ changePage, totalPages, size = "xs",initialPage }) => {
  console.log(initialPage)
  return (
    <>
    <Spacer y={1} />
    <Row justify='center'>
      <Pagination 
        total={totalPages} 
        color="success"
        shadow
        rounded
        noMargin
        siblings={2}
        size={size} 
        onChange={changePage}
        page={initialPage}
        animated={false}
      />
    </Row>
    <Spacer y={1} />
    </>
  )
}
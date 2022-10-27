import { Pagination, Row, Spacer } from "@nextui-org/react"

export const PaginationControl = ({ changePage, totalPages, size = "xs",initialPage }) => {
  return (
    <>
    <Spacer y={1} />
    <Row justify='center'>
      <Pagination 
        total={totalPages} 
        color="gradient"
        shadow
        rounded
        noMargin
        siblings={2}
        size={size} 
        onChange={changePage}
        initialPage={initialPage}
      />
    </Row>
    <Spacer y={1} />
    </>
  )
}
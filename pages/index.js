const API = 'https://jsonplaceholder.typicode.com/posts'

export default function Users(props) {
  return (
    <>
      <div className='layout my-12'>
        <h1 className='text-2xl font-semibold text-gray-900'>Posts Pages</h1>

        <div className='relative mt-12 overflow-x-auto'>
          <table className='w-full text-left text-sm text-gray-500'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  ID
                </th>
                <th scope='col' className='py-3 px-6'>
                  Tile
                </th>
                <th scope='col' className='py-3 px-6'>
                  Body
                </th>
              </tr>
            </thead>

            <tbody>
              {props.posts?.map((post) => (
                <tr className='border-b bg-white' key={post.id}>
                  <td
                    scope='row'
                    className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'
                  >
                    {post.id}
                  </td>

                  <td
                    scope='row'
                    className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'
                  >
                    {post.title}
                  </td>

                  <td
                    scope='row'
                    className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'
                  >
                    {post.body}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(API)
  const posts = await res.json()

  return {
    props: { posts },
  }
}

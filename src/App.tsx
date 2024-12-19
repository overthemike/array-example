import { proxy, useSnapshot } from 'valtio'

const state = proxy({
  addresses: ['123 Main St', '456 Oak Ave', '789 Pine Rd']
})

const replaceAddresses = () => {
  state.addresses = ['999 New Ave', '888 Fresh St', '777 Cool Rd']
}

const replaceSecondAddress = () => {
  state.addresses[1] = 'foo'
}

const AddressList = () => {
  const snap = useSnapshot(state)

  return (
    <div className='p-6 max-w-md mx-auto'>
      <div className='mb-4'>
        <h2 className='text-xl font-bold mb-2'>Current Addresses:</h2>
        <ul className='space-y-2'>
          {snap.addresses.map((address, index) => (
            <li key={index} className='p-2 bg-gray-100 rounded'>
              {address}
            </li>
          ))}
        </ul>
      </div>

      <div className='space-y-2'>
        <button
          onClick={replaceAddresses}
          className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
        >
          Replace All Addresses
        </button>

        <button
          onClick={replaceSecondAddress}
          className='w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors'
        >
          Replace Second Address with "foo"
        </button>
      </div>
    </div>
  )
}

export default AddressList

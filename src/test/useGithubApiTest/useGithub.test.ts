import { render, renderHook } from "@testing-library/react"
import axios from "axios"
import { act } from "react-dom/test-utils"
import { useGithubAPi } from "../../customHooks/github_search"

jest.mock('axios')

describe('useApiGithubMook Hook', () => {
  it('should fetch users', async () => {
    axios.get.mockResolvedValue({
      data: {
        items: [{login: 'user1'}, {login: 'user2'}]
      }
    })

    const {result, waitForNextUpdate} = renderHook(() => useGithubAPi())

    act(() => {
      result.current.setUsername('test')
    })

    await waitForNextUpdate()

    expect(result.current.users).toEqual(['user1', 'user2'])
    expect(result.current.error).toBeNull()
  })
})

it('should fetch repositories', async () => {
  axios.get.mockResolvedValue({
    data: [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }],
  });

  const { result, waitForNextUpdate } = renderHook(() => useGithubAPi())

  act(() => {
    result.current.setSelectedUser('user1')
  })

  await waitForNextUpdate()

  expect(result.current.repositories).toEqual([
    { id: 1, name: 'repo1' },
    { id: 2, name: 'repo2' },
  ])
  expect(result.current.error).toBeNull()
})
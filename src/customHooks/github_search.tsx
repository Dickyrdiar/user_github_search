/* eslint-disable react-hooks/exhaustive-deps */
import { keyboardKey } from "@testing-library/user-event"
import axios from "axios"
import { useEffect, useState } from "react"

interface Repository {
  id: number
  name: string
  description: string,
  stargazers_count: number
}

export const useGithubAPi = () => {
  const [username, setUsername] = useState('')
  const [users, setUsers] = useState<string[]>([])
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)


  const searchUsers = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${username}&per_page=5`
      );

      const usernames = response.data.items.map((user: any) => user.login)
      setUsers(usernames)
    } catch (error) {
      // setError(error)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const getUsersRepositories = async () => {
    setLoading(true)
    setError(null)
    if (selectedUser) {
       try {
        const respoonse = await axios.get(
          `https://api.github.com/users/${selectedUser}/repos`
        )

        const repos: Repository[] = respoonse.data
        setRepositories(repos)
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    const handlerKeyPress = (event: keyboardKey) => {
      if (event.key === "Enter") {
        searchUsers()
      }
    }

    window.addEventListener('keydown', handlerKeyPress)

    return () => {
      window.removeEventListener('keydown', handlerKeyPress)
    }
  })

  useEffect(() => {
    if (selectedUser) {
      getUsersRepositories()
    }
  }, [selectedUser])

  return {
    username,
    setUsername,
    users,
    selectedUser,
    setSelectedUser,
    repositories,
    searchUsers,
    loading,
    error
  }
}

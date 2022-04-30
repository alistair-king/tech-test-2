import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Filter from '../Filter'

describe('Filter Component',() => {
  it('renders', async () => {
    const setFilterStatus = vi.fn()
    render(<Filter filterStatus="all" setFilterStatus={setFilterStatus} />)
  })

  it('sets filter to all when All button clicked', async () => {
    const setFilterStatus = vi.fn()
    render(<Filter filterStatus="online" setFilterStatus={setFilterStatus} />)
    fireEvent.click(screen.getByText('All'))
    expect(setFilterStatus).toHaveBeenCalledWith('all')
  })

  it('sets filter to online when Online Only button clicked', async () => {
    const setFilterStatus = vi.fn()
    render(<Filter filterStatus="all" setFilterStatus={setFilterStatus} />)
    fireEvent.click(screen.getByText('Online Only'))
    expect(setFilterStatus).toHaveBeenCalledWith('online')
  })

  it('sets filter to offline when Offline Only button clicked', async () => {
    const setFilterStatus = vi.fn()
    render(<Filter filterStatus="all" setFilterStatus={setFilterStatus} />)
    fireEvent.click(screen.getByText('Offline Only'))
    expect(setFilterStatus).toHaveBeenCalledWith('offline')
  })
})

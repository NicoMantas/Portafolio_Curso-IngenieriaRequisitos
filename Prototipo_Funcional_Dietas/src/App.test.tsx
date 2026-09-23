import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppProvider } from './context/AppContext'

describe('Dietas al Día', () => {
  it('muestra la pantalla de login con acceso para médicos', () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>,
    )

    expect(screen.getByText(/dietas al día/i)).toBeInTheDocument()
    expect(screen.getAllByText(/médico nutricionista/i).length).toBeGreaterThan(0)
  })
})

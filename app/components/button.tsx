import React from 'react'

interface InputProps {
  label: string;
  type: 'submit' | 'reset' | 'button';
  color?: string;
}

const Button: React.FC<InputProps> = ({ label, type, color = 'bg-green-500' }) => {
  return (
    <button type={type} className={`w-auto mt-6 py-2 px-4 ${color} text-white font-semibold rounded-lg hover:${color}/90 transition cursor-pointer`}>
      {label}
    </button>
  )
}

export default Button
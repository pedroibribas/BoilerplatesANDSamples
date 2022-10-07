import { useEffect, useRef } from "react";

export default function useOnClickOutsideRef(callback, initialValue = null) {
  // Inicializar useRef
  const elementRef = useRef(initialValue);

  useEffect(() => {
    function handleClick(event) {
      // Validar se o elemento referenciado não ouviu click
      if (!elementRef.current?.contains(event.target)) {
        // Chamar função que causa o efeito desejado
        callback();
      };
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [callback]);

  // Obter elemento que não deve reagir ao click
  return elementRef;
};

// # Fontes
// https://dev.to/pbteja1998/easily-detect-outside-click-using-useref-hook-in-react-4035

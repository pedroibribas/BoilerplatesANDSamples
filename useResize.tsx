import { useLayoutEffect, useState } from "react";

interface IDimensions {
  width: number;
  height: number;
};

export const useResize = (el: HTMLElement) => {
  // Inicializar estado para as dimensões width x height
  const [dimensions, setDimensions] = useState<IDimensions>({
    width: 0,
    height: 0
  });

  // Monitorar comportamento do elemento
  useLayoutEffect(() => {
    const handleResize = () => {
      setDimensions(prevState => ({
        ...prevState,
        width: el.offsetWidth,
        height: el.offsetWidth
      }));
    };

    // Obter dimensões no carregamento da página
    if (el) {
      handleResize();
    };

    // Obter dimensões no redimensionamento
    window.addEventListener('resize', handleResize);

    // Remover listener para evitar bugs
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [el]);

  // Retornar dimensões width x height
  return dimensions;
};

/**
 * Resumo
 * Inicializar estado para as dimensões width x height
 * Monitorar comportamento do elemento
 * Obter dimensões no carregamento da página
 * Obter dimensões no redimensionamento
 * Remover listener para evitar bugs
 * Retornar dimensões width x height
 * 
 * Sources
 * https://linguinecode.com/post/how-to-use-react-useref-with-typescript
 * https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect
 */


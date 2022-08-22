import { useLayoutEffect, useState } from "react";

interface IDimensions {
  width: undefined | number;
  height: undefined | number;
};

export const useResize = (el: HTMLElement) => {
  // Inicializar estado das dimensões
  const [dimensions, setDimensions] = useState<IDimensions>({
    width: undefined, // client-side e server-side match (no server, window é undefined)
    height: undefined,
  });

  // Monitorar comportamento do elemento
  useLayoutEffect(() => {
    // Prevenir 'document is not defined'
    if (typeof window !== 'undefined') {
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
    };
  }, [el]);

  // Retornar dimensões
  return dimensions;
};

/**
 * Resumo
 * Inicializar estado para as dimensões
 * Monitorar comportamento do elemento
 * Prevenir 'document is not defined'
 * Obter dimensões no carregamento da página
 * Obter dimensões no redimensionamento
 * Remover listener para evitar bugs
 * Retornar dimensões width x height
 * 
 * Sources
 * https://linguinecode.com/post/how-to-use-react-useref-with-typescript
 * https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect
 * https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
 * https://www.joshwcomeau.com/react/the-perils-of-rehydration/
 */


import { useState, useCallback } from 'react';
import type {
  Player,
  Piece,
  Position,
  Move,
} from '../lib/gameLogic';
import {
  getInitialPieces,
  getValidMoves,
  applyMove,
  checkWinner,
  countCaptures,
  ROWS,
  COLS,
} from '../lib/gameLogic';

interface GameState {
  pieces: Map<string, Piece>;
  currentPlayer: Player;
  selectedPosition: Position | null;
  validMoves: Move[];
  winner: Player | 'draw' | null;
  captures: { light: number; dark: number };
  isGameOver: boolean;
}

export function useGame() {
  const [gameState, setGameState] = useState<GameState>(() => ({
    pieces: getInitialPieces(),
    currentPlayer: 'light',
    selectedPosition: null,
    validMoves: [],
    winner: null,
    captures: { light: 0, dark: 0 },
    isGameOver: false,
  }));

  const selectPiece = useCallback((position: Position) => {
    setGameState((prev) => {
      if (prev.isGameOver) return prev;

      const piece = prev.pieces.get(`${position.row}-${position.col}`);
      if (!piece || piece.player !== prev.currentPlayer) {
        return {
          ...prev,
          selectedPosition: null,
          validMoves: [],
        };
      }

      const moves = getValidMoves(piece, position, prev.pieces);
      return {
        ...prev,
        selectedPosition: position,
        validMoves: moves,
      };
    });
  }, []);

  const movePiece = useCallback((move: Move) => {
    setGameState((prev) => {
      const newPieces = applyMove(prev.pieces, move);
      const captures = countCaptures(newPieces);
      const winner = checkWinner(newPieces);

      return {
        pieces: newPieces,
        currentPlayer: prev.currentPlayer === 'light' ? 'dark' : 'light',
        selectedPosition: null,
        validMoves: [],
        winner,
        captures,
        isGameOver: winner !== null,
      };
    });
  }, []);

  const handleSquareClick = useCallback(
    (row: number, col: number) => {
      setGameState((prev) => {
        if (prev.isGameOver) return prev;

        const clickedPosition = { row, col };
        const clickedKey = `${row}-${col}`;
        const clickedPiece = prev.pieces.get(clickedKey);

        const isValidMove = prev.validMoves.some(
          (m) => m.to.row === row && m.to.col === col
        );

        if (isValidMove) {
          const move = prev.validMoves.find(
            (m) => m.to.row === row && m.to.col === col
          );
          if (move) {
            const newPieces = applyMove(prev.pieces, move);
            const captures = countCaptures(newPieces);
            const winner = checkWinner(newPieces);

            return {
              pieces: newPieces,
              currentPlayer: prev.currentPlayer === 'light' ? 'dark' : 'light',
              selectedPosition: null,
              validMoves: [],
              winner,
              captures,
              isGameOver: winner !== null,
            };
          }
        }

        if (clickedPiece && clickedPiece.player === prev.currentPlayer) {
          const moves = getValidMoves(clickedPiece, clickedPosition, prev.pieces);
          return {
            ...prev,
            selectedPosition: clickedPosition,
            validMoves: moves,
          };
        }

        return {
          ...prev,
          selectedPosition: null,
          validMoves: [],
        };
      });
    },
    []
  );

  const resetGame = useCallback(() => {
    setGameState({
      pieces: getInitialPieces(),
      currentPlayer: 'light',
      selectedPosition: null,
      validMoves: [],
      winner: null,
      captures: { light: 0, dark: 0 },
      isGameOver: false,
    });
  }, []);

  const isValidMoveSquare = useCallback(
    (row: number, col: number) => {
      return gameState.validMoves.some(
        (m) => m.to.row === row && m.to.col === col
      );
    },
    [gameState.validMoves]
  );

  const getPieceAt = useCallback(
    (row: number, col: number): Piece | undefined => {
      return gameState.pieces.get(`${row}-${col}`);
    },
    [gameState.pieces]
  );

  const isSelected = useCallback(
    (row: number, col: number): boolean => {
      return (
        gameState.selectedPosition?.row === row &&
        gameState.selectedPosition?.col === col
      );
    },
    [gameState.selectedPosition]
  );

  return {
    ...gameState,
    selectPiece,
    movePiece,
    handleSquareClick,
    resetGame,
    isValidMoveSquare,
    getPieceAt,
    isSelected,
    ROWS,
    COLS,
  };
}
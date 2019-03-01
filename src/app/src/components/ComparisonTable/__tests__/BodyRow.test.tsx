/**
 * Copyright (c) 2019 Paul Armstrong
 */
import { ArtifactCell } from '../ArtifactCell';
import { BodyRow } from '../BodyRow';
import ColorScale from '../../../modules/ColorScale';
import { DeltaCell } from '../DeltaCell';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TotalCell } from '../TotalCell';
import { TotalDeltaCell } from '../TotalDeltaCell';
import { Tr } from '../../Table';
import { BodyCell, CellType, TotalDeltaCell as TDCell } from '@build-tracker/comparator';
import { fireEvent, render } from 'react-native-testing-library';

describe('BodyRow', () => {
  describe('render', () => {
    test('artifact cell', () => {
      const row: Array<BodyCell> = [{ type: CellType.ARTIFACT, text: 'tacos' }];
      const handleDisable = jest.fn();
      const handleEnable = jest.fn();
      const { getByType } = render(
        <BodyRow
          colorScale={ColorScale.Rainbow}
          isActive
          isHovered={false}
          onDisableArtifact={handleDisable}
          onEnableArtifact={handleEnable}
          onHoverArtifact={jest.fn()}
          row={row}
          rowIndex={1}
          sizeKey="stat"
        />
      );
      expect(getByType(ArtifactCell).props).toMatchObject({
        cell: row[0],
        color: ColorScale.Rainbow(1),
        isActive: true,
        onDisable: handleDisable,
        onEnable: handleEnable
      });
    });

    test('delta cell', () => {
      const row: Array<BodyCell> = [
        { type: CellType.DELTA, sizes: { stat: 4 }, percents: { stat: 4 }, hashChanged: false }
      ];
      const { getByType } = render(
        <BodyRow
          colorScale={ColorScale.Rainbow}
          isActive
          isHovered={false}
          onDisableArtifact={jest.fn()}
          onEnableArtifact={jest.fn()}
          onHoverArtifact={jest.fn()}
          row={row}
          rowIndex={1}
          sizeKey="stat"
        />
      );
      expect(getByType(DeltaCell).props).toMatchObject({
        cell: row[0],
        sizeKey: 'stat'
      });
    });

    test('total cell', () => {
      const row: Array<BodyCell> = [{ type: CellType.TOTAL, sizes: { stat: 4 } }];
      const { getByType } = render(
        <BodyRow
          colorScale={ColorScale.Rainbow}
          isActive
          isHovered={false}
          onDisableArtifact={jest.fn()}
          onEnableArtifact={jest.fn()}
          onHoverArtifact={jest.fn()}
          row={row}
          rowIndex={1}
          sizeKey="stat"
        />
      );
      expect(getByType(TotalCell).props).toMatchObject({
        cell: row[0],
        sizeKey: 'stat'
      });
    });

    test('total delta cell', () => {
      const row: Array<BodyCell | TDCell> = [{ type: CellType.TOTAL_DELTA, sizes: { stat: 4 }, percents: { stat: 4 } }];
      const { getByType } = render(
        <BodyRow
          colorScale={ColorScale.Rainbow}
          isActive
          isHovered={false}
          onDisableArtifact={jest.fn()}
          onEnableArtifact={jest.fn()}
          onHoverArtifact={jest.fn()}
          row={row}
          rowIndex={1}
          sizeKey="stat"
        />
      );
      expect(getByType(TotalDeltaCell).props).toMatchObject({
        cell: row[0],
        sizeKey: 'stat'
      });
    });
  });

  describe('hovering', () => {
    test('is transparent background when row is not isHovered', () => {
      const row: Array<BodyCell> = [{ type: CellType.TOTAL, sizes: { stat: 4 } }];
      const { getByType } = render(
        <BodyRow
          colorScale={ColorScale.Rainbow}
          isActive
          isHovered={false}
          onDisableArtifact={jest.fn()}
          onEnableArtifact={jest.fn()}
          onHoverArtifact={jest.fn()}
          row={row}
          rowIndex={1}
          sizeKey="stat"
        />
      );
      expect(StyleSheet.flatten(getByType(Tr).props.style)).toMatchObject({
        backgroundColor: expect.any(String)
      });
    });

    test('is visually highlighed when the row isHovered', () => {
      const row: Array<BodyCell> = [{ type: CellType.TOTAL, sizes: { stat: 4 } }];
      const { getByType } = render(
        <BodyRow
          colorScale={ColorScale.Rainbow}
          isActive
          isHovered
          onDisableArtifact={jest.fn()}
          onEnableArtifact={jest.fn()}
          onHoverArtifact={jest.fn()}
          row={row}
          rowIndex={1}
          sizeKey="stat"
        />
      );
      expect(StyleSheet.flatten(getByType(Tr).props.style)).toMatchObject({
        backgroundColor: 'rgb(228, 218, 241)'
      });
    });

    test('calls back to onHoverArtifact when mouse enter', () => {
      const row: Array<BodyCell> = [{ type: CellType.ARTIFACT, text: 'tacos' }];
      const handleHoverArtifact = jest.fn();
      const { getByType } = render(
        <BodyRow
          colorScale={ColorScale.Rainbow}
          isActive
          isHovered
          onDisableArtifact={jest.fn()}
          onEnableArtifact={jest.fn()}
          onHoverArtifact={handleHoverArtifact}
          row={row}
          rowIndex={1}
          sizeKey="stat"
        />
      );
      fireEvent(getByType(Tr), 'mouseEnter');
      expect(handleHoverArtifact).toHaveBeenCalledWith('tacos');
    });

    test('calls onHoverArtifact with null if is not active', () => {
      const row: Array<BodyCell> = [{ type: CellType.ARTIFACT, text: 'tacos' }];
      const handleHoverArtifact = jest.fn();
      const { getByType } = render(
        <BodyRow
          colorScale={ColorScale.Rainbow}
          isActive={false}
          isHovered={false}
          onDisableArtifact={jest.fn()}
          onEnableArtifact={jest.fn()}
          onHoverArtifact={handleHoverArtifact}
          row={row}
          rowIndex={1}
          sizeKey="stat"
        />
      );
      fireEvent(getByType(Tr), 'mouseEnter');
      expect(handleHoverArtifact).toHaveBeenCalledWith(null);
    });

    test('calls onHoverArtifact with null if is All', () => {
      const row: Array<BodyCell> = [{ type: CellType.ARTIFACT, text: 'All' }];
      const handleHoverArtifact = jest.fn();
      const { getByType } = render(
        <BodyRow
          colorScale={ColorScale.Rainbow}
          isActive
          isHovered={false}
          onDisableArtifact={jest.fn()}
          onEnableArtifact={jest.fn()}
          onHoverArtifact={handleHoverArtifact}
          row={row}
          rowIndex={1}
          sizeKey="stat"
        />
      );
      fireEvent(getByType(Tr), 'mouseEnter');
      expect(handleHoverArtifact).toHaveBeenCalledWith(null);
    });
  });
});

// @flow
import { formatSha, formatTime } from './formatting';
import theme from './theme';
import React, { PureComponent } from 'react';
import { Table, Tbody, Tr, Th, Td } from './Table';
import { StyleSheet, Text, View } from 'react-native';

import type { Build } from './types';

export default class BuildInfo extends PureComponent {
  props: {
    build: Build
  };

  render() {
    const { build: { build } } = this.props;
    return (
      <View>
        <Text style={styles.heading}>
          Build {formatSha(build.revision)}
        </Text>
        <Table>
          <Tbody>
            <Tr>
              <Th>Revision</Th>
              <Td>
                {build.revision}
              </Td>
            </Tr>
            <Tr>
              <Th>Build Time</Th>
              <Td>
                {formatTime(build.timestamp)}
              </Td>
            </Tr>
          </Tbody>
        </Table>
        {build.meta
          ? <View>
              <Text style={styles.sectionHeading}>Build Meta</Text>
              {/* TODO: format for build meta? */}
            </View>
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: theme.fontSizeXLarge
  },
  sectionHeading: {
    fontSize: theme.fontSizeLarge
  }
});

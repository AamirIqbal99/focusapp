import { View, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { useState } from 'react';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 300;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
      </View>

      <View>
        <Text style={styles.title} >Focusing on</Text>
        <Text style={styles.task} >{focusSubject}</Text>
      </View>

      <View style={{paddingTop: spacing.sm}}>
        <ProgressBar
          progress={progress}
          color={colors.progressBarPurple}
          style={{height: 10}}
        />
      </View>

      <View style={styles.buttonForMinutes}>
        <Timing onChangeTime={setMinutes}/>
      </View>

      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={75} title="Clear" onPress={clearSubject} />
      </View>

      <View style={styles.buttonWrapper}>
        { !isStarted ?
          ( <RoundedButton title="Start" onPress={() => { setIsStarted(true) }} /> ) :
          ( <RoundedButton title="Pause" onPress={() => { setIsStarted(false) }} /> )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.xl,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingBottom: 20,
    fontSize: fontSizes.lg,
  },
  buttonForMinutes: {
    flex: 0.3,
    flexDirection: 'row',
    paddingTop: 25,
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: fontSizes.md,
  },
});

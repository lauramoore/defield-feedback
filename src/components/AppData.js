/*
 This implements the "Custom Composeable" pattern to support
 having variables persisted to local storage. components that
 need team number import the getTeam function,  components
 that change team can import the saveTeam function
*/
import { ref, watch } from 'vue';

const storedTeam = localStorage.getItem('teamNumber');
const teamNumberRef = ref(storedTeam ? Number(storedTeam) : null);

watch(teamNumberRef, (newValue) => {
  localStorage.setItem('teamNumber', newValue)
}, {});

export function getTeam() {
  return teamNumberRef.value;
}
export function saveTeam(value) {
   teamNumberRef.value = Number(value);
}

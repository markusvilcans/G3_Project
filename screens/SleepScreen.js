import React,{Component} from 'react';
import {View,Image,Button} from 'react-native';
import MapView,{Marker, Circle} from 'react-native-maps';

const latitudeDelta = 3
const longitudeDelta = 3
export default class SleepScreen extends Component{
  state={
    region:{
      latitudeDelta,
      longitudeDelta,
      latitude: 57.9719434,
      longitude: 25.145185,
    },
    marginBottom:1
  }
  componentDidMount(){
    this.handleUserLocation();
    setTimeout(()=>this.setState({marginBottom:0}),100)
  }

handleUserLocation(){
  navigator.geolocation.getCurrentPosition(pos=>{
    this.map.animateToRegion({
      ...this.state.initialRegion,
      latitude: pos.coords.latitude,
      longitude:pos.coords.longitude
    })
    this.setState({
      ...this.state.initialRegion,
      latitude:pos.coords.latitude,
      longitude:pos.coords.longitude
    })
  })
}

  onChangeValue = region =>{
    this.setState({
      region
    })
  }

  render(){
    console.disableYellowBox = true;
    const { route } = this.props;
    const {l1, l2} = route.params;
    
    return(
      <View style={{flex:1}}>
      <MapView
      style={{flex:1, marginBottom: this.state.marginBottom}}
      showsUserLocation={true}
      showsMyLocationButton= {true}
      initialRegion={this.state.region}
      onRegionChange={this.onChangeValue}
      ref = {ref=>this.map=ref}>
      
      <MapView.Marker
          title="Destination"
          coordinate={{
            latitude: l1,
            longitude: l2
            }}         
          />
      <Circle center = {{latitude: l1,longitude: l2}}
                    radius = { 3000 }
                    strokeWidth = { 2 }
                    strokeColor = { '#F00' }/>  
      </MapView>
      </View>
    )
  }
}
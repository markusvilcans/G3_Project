import React,{Component} from 'react';
import {View,Image,Button} from 'react-native';
import MapView from 'react-native-maps';

const latitudeDelta = 7
const longitudeDelta = 7
export default class MapScreen extends Component{
  
  state={
    region:{
      latitudeDelta,
      longitudeDelta,
      latitude: 56.9719434,
      longitude: 24.145185,
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
    const { navigation } = this.props;
    return(
      <View style={{flex:1}}>
      <MapView
      style={{flex:1, marginBottom: this.state.marginBottom}}
      showsUserLocation={true}
      showsMyLocationButton= {true}
      initialRegion={this.state.region}
      onRegionChange={this.onChangeValue}
      ref = {ref=>this.map=ref}
      />
      <View style={{top:'50%',left:'50%', marginLeft:-24,marginTop:-48,position:'absolute'}}>
      <Image style={{height:48,width:48}} source={require('../assets/map.png')}/>
      </View>
      <View style={{width: 500,alignSelf: 'center'}}>
    <Button title="Confirm" onPress={()=>{
          navigation.navigate("Sleep",{
            l1:this.state.region.latitude,
            l2:this.state.region.longitude,
          });
        }}/>
        </View>
      </View>
    )
  }
}
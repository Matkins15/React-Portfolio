import React, { Component } from 'react'
import Particles from 'react-particles-js'

export default class Canvas extends Component {
  render () {
    return (
      <Particles
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundColor: 'black'

        }}
        params={{
          'particles': {
            'number': {
              'value': 100,
              'density': {
                'enable': true,
                'value_area': 1000
              }
            },
            'color': {
              'value': '#eee'
            },
            'shape': {
              'type': 'circle',
              'stroke': {
                'width': 0,
                'color': '#eee'
              },
              'polygon': {
                'nb_sides': 5
              },
              'image': {
                'src': 'img/github.svg',
                'width': 100,
                'height': 100
              }
            },
            'opacity': {
              'value': 0.5,
              'random': false,
              'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
              }
            },
            'size': {
              'value': 5,
              'random': true,
              'anim': {
                'enable': false,
                'speed': 50,
                'size_min': 0.1,
                'sync': false
              }
            },
            'line_linked': {
              'enable': false,
              'distance': 300,
              'color': '#ffffff',
              'opacity': 0.4,
              'width': 2
            },
            'move': {
              'enable': true,
              'speed': 4,
              'direction': 'none',
              'random': true,
              'straight': false,
              'out_mode': 'bounce',
              'bounce': false,
              'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
              }
            }
          },
          'interactivity': {
            'detect_on': 'window',
            'events': {
              'onhover': {
                'enable': true,
                'mode': 'bubble'
              },
              'onclick': {
                'enable': false,
                'mode': 'grab'
              },
              'resize': true
            },
            'modes': {
              'grab': {
                'distance': 500,
                'line_linked': {
                  'opacity': 1
                }
              },
              'bubble': {
                'distance': 100,
                'size': 40,
                'duration': 10,
                'opacity': 0.8,
                'speed': 3
              },
              'repulse': {
                'distance': 400,
                'duration': 0.4
              },
              'push': {
                'particles_nb': 4
              },
              'remove': {
                'particles_nb': 2
              }
            }
          },
          'retina_detect': true
        }} />
    )
  }
}

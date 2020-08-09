export var LandingParticleConfig = {
    particles: {
        number: {
            value: 170,
            density: {
                enable: true,
                value_area: 1400,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'polygon',
            stroke: {
                width: 1,
                color: '#ffffff',
            },
            polygon: {
                nb_sides: 10,
            },
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1.0,
                opacity_min: 0.25,
                sync: true,
            },
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 1.25,
                sync: true,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 1,
            width: 1,
        },
        move: {
            enable: true,
            speed: 8,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 2000,
                rotateY: 2000,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            onclick: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 3,
                },
            },
            repulse: {
                distance: 250,
                duration: 2,
            },
        },
    },
    retina_detect: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvYXNzZXRzL3BhcnRpY2xlcy9sYW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHO0lBQ25DLFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxHQUFHO1lBQ1YsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFVBQVUsRUFBRSxJQUFJO2FBQ2pCO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsU0FBUztTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxFQUFFO2FBQ2I7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUk7Z0JBQ1osS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLElBQUksRUFBRSxJQUFJO2FBQ1g7U0FDRjtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUk7Z0JBQ1osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLElBQUk7YUFDWDtTQUNGO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFLElBQUk7WUFDWixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLENBQUM7WUFDUixTQUFTLEVBQUUsTUFBTTtZQUNqQixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0Y7S0FDRjtJQUNELGFBQWEsRUFBRTtRQUNiLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxJQUFJO2dCQUNaLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0QsTUFBTSxFQUFFLElBQUk7U0FDYjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUUsR0FBRztnQkFDYixXQUFXLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUM7aUJBQ1g7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsR0FBRztnQkFDYixRQUFRLEVBQUUsQ0FBQzthQUNaO1NBQ0Y7S0FDRjtJQUNELGFBQWEsRUFBRSxJQUFJO0NBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTGFuZGluZ1BhcnRpY2xlQ29uZmlnID0ge1xyXG4gIHBhcnRpY2xlczoge1xyXG4gICAgbnVtYmVyOiB7XHJcbiAgICAgIHZhbHVlOiAxNzAsXHJcbiAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWVfYXJlYTogMTQwMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB2YWx1ZTogJyNmZmZmZmYnLFxyXG4gICAgfSxcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIHR5cGU6ICdwb2x5Z29uJyxcclxuICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgcG9seWdvbjoge1xyXG4gICAgICAgIG5iX3NpZGVzOiAxMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvcGFjaXR5OiB7XHJcbiAgICAgIHZhbHVlOiAxLFxyXG4gICAgICByYW5kb206IHRydWUsXHJcbiAgICAgIGFuaW06IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDEuMCxcclxuICAgICAgICBvcGFjaXR5X21pbjogMC4yNSxcclxuICAgICAgICBzeW5jOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNpemU6IHtcclxuICAgICAgdmFsdWU6IDIsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgYW5pbToge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMTAsXHJcbiAgICAgICAgc2l6ZV9taW46IDEuMjUsXHJcbiAgICAgICAgc3luYzogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHdpZHRoOiAxLFxyXG4gICAgfSxcclxuICAgIG1vdmU6IHtcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICBzcGVlZDogOCxcclxuICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICBvdXRfbW9kZTogJ291dCcsXHJcbiAgICAgIGJvdW5jZTogdHJ1ZSxcclxuICAgICAgYXR0cmFjdDoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICByb3RhdGVYOiAyMDAwLFxyXG4gICAgICAgIHJvdGF0ZVk6IDIwMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBvbmhvdmVyOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6ICdncmFiJyxcclxuICAgICAgfSxcclxuICAgICAgb25jbGljazoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiAncmVwdWxzZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc2l6ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBtb2Rlczoge1xyXG4gICAgICBncmFiOiB7XHJcbiAgICAgICAgZGlzdGFuY2U6IDIwMCxcclxuICAgICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgZGlzdGFuY2U6IDI1MCxcclxuICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXRpbmFfZGV0ZWN0OiB0cnVlLFxyXG59O1xyXG4iXX0=
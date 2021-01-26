export const LandingParticleConfig = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1500,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvYXNzZXRzL3BhcnRpY2xlcy9sYW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHO0lBQ25DLFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFVBQVUsRUFBRSxJQUFJO2FBQ2pCO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsU0FBUztTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxFQUFFO2FBQ2I7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUk7Z0JBQ1osS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLElBQUksRUFBRSxJQUFJO2FBQ1g7U0FDRjtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUk7Z0JBQ1osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLElBQUk7YUFDWDtTQUNGO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFLElBQUk7WUFDWixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLENBQUM7WUFDUixTQUFTLEVBQUUsTUFBTTtZQUNqQixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0Y7S0FDRjtJQUNELGFBQWEsRUFBRTtRQUNiLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxJQUFJO2dCQUNaLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0QsTUFBTSxFQUFFLElBQUk7U0FDYjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUUsR0FBRztnQkFDYixXQUFXLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUM7aUJBQ1g7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsR0FBRztnQkFDYixRQUFRLEVBQUUsQ0FBQzthQUNaO1NBQ0Y7S0FDRjtJQUNELGFBQWEsRUFBRSxJQUFJO0NBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTGFuZGluZ1BhcnRpY2xlQ29uZmlnID0ge1xyXG4gIHBhcnRpY2xlczoge1xyXG4gICAgbnVtYmVyOiB7XHJcbiAgICAgIHZhbHVlOiA1MCxcclxuICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZV9hcmVhOiAxNTAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHZhbHVlOiAnI2ZmZmZmZicsXHJcbiAgICB9LFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgdHlwZTogJ3BvbHlnb24nLFxyXG4gICAgICBzdHJva2U6IHtcclxuICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBwb2x5Z29uOiB7XHJcbiAgICAgICAgbmJfc2lkZXM6IDEwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG9wYWNpdHk6IHtcclxuICAgICAgdmFsdWU6IDEsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgYW5pbToge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMS4wLFxyXG4gICAgICAgIG9wYWNpdHlfbWluOiAwLjI1LFxyXG4gICAgICAgIHN5bmM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB2YWx1ZTogMixcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxMCxcclxuICAgICAgICBzaXplX21pbjogMS4yNSxcclxuICAgICAgICBzeW5jOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgZGlzdGFuY2U6IDE1MCxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgd2lkdGg6IDEsXHJcbiAgICB9LFxyXG4gICAgbW92ZToge1xyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA4LFxyXG4gICAgICBkaXJlY3Rpb246ICdub25lJyxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBzdHJhaWdodDogZmFsc2UsXHJcbiAgICAgIG91dF9tb2RlOiAnb3V0JyxcclxuICAgICAgYm91bmNlOiB0cnVlLFxyXG4gICAgICBhdHRyYWN0OiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvdGF0ZVg6IDIwMDAsXHJcbiAgICAgICAgcm90YXRlWTogMjAwMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICBkZXRlY3Rfb246ICdjYW52YXMnLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgbW9kZTogJ2dyYWInLFxyXG4gICAgICB9LFxyXG4gICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6ICdyZXB1bHNlJyxcclxuICAgICAgfSxcclxuICAgICAgcmVzaXplOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGdyYWI6IHtcclxuICAgICAgICBkaXN0YW5jZTogMjAwLFxyXG4gICAgICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICBkaXN0YW5jZTogMjUwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJldGluYV9kZXRlY3Q6IHRydWUsXHJcbn07XHJcbiJdfQ==
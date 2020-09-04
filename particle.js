class Particle {

    constructor(walls) {
      this.pos = createVector(width / 2, height / 2);
      this.set = new Set([]);     // Array of unique vertex points from walls
      this.updateSet(walls);      // Update set array using walls
      this.rays = [];             // Array of rays on particle (One for each unique vertex points)
      this.updateRays();          // Update rays array using this.set
      this.endpoints = [];        // Array of endpoints for each ray
    }
    
    // Adds all unique vertex points from walls
    updateSet(walls) {
        for(let wall of walls) {
            let test = true;
            for(let item of this.set) {
                if(item.equals(wall.a)) {
                    test = false;
                }
            }
            if(test) this.set.add(wall.a);
            test = true;
            for(let item of this.set) {
                if(item.equals(wall.b)) {
                    test = false;
                }
            }
            if(test) this.set.add(wall.b);
        }
    }

    // Resets rays array and adds a ray for each unique vertex points
    updateRays() {
      this.rays = [];
      for(let item of this.set) {
        this.rays.push(new Ray(this.pos, item, 0.00001));
        this.rays.push(new Ray(this.pos, item, -0.00001));
    }
    }

    update(x, y, walls) {
      this.pos.set(x, y);
      this.updateRays();
    }
  
    cast(walls) {
      /* Cast each ray onto each wall, add endpoints into array */
      for (let i = 0; i < this.rays.length; i++) {
        const ray = this.rays[i];
        let endpt = null;
        let min = Infinity;
        for (let wall of walls) {
          const pt = ray.cast(wall);
          if (pt) {
            const dist = p5.Vector.dist(this.pos, pt);
            if (dist < min) {
              endpt = pt;
              min = dist;
            }
          }
        }
        if (endpt) {
          this.endpoints.push(endpt);
        }
      }
      /* Sort endPoints array based on angle */
      let myPos = createVector(this.pos.x, this.pos.y);
      this.endpoints.sort(function(vec_a,vec_b) {
        let test = createVector(10,0);
        push();
        translate(myPos.x, myPos.y);
        let vec_1 = createVector(vec_a.x - myPos.x, vec_a.y - myPos.y);
        let vec_2 = createVector(vec_b.x - myPos.x, vec_b.y - myPos.y);
        let ang_1 = test.angleBetween(vec_1);
        let ang_2 = test.angleBetween(vec_2);
        pop();
        return ang_2 - ang_1;
      });
      /* Create visible region from endPoints vector*/
      this.showTriFan();
    }

    // Creates Triangle Fan from endpoints array
    showTriFan() {
      beginShape(TRIANGLE_FAN);
      vertex(this.pos.x, this.pos.y);
      for(let pt of this.endpoints) {
        //stroke(255, 0, 0);
        noStroke();
        fill(255, 255, 255, 100);
        vertex(pt.x, pt.y);
      }
      vertex(this.endpoints[0].x, this.endpoints[0].y);
      endShape();
      /* Show endpoints of where ray cast onto wall
      for(let pt of this.endpoints) {
        fill(0, 255, 0);
        ellipse(pt.x, pt.y, 8, 8);
      }
      */
      this.endpoints = [];
    }

    
    show() {
      fill(0,0,255);
      ellipse(this.pos.x, this.pos.y, 4, 4);
    }
  }
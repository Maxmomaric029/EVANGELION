class DraggablePanel {
    constructor(container) {
        this.container = container;
        this.isDragging = false;
        this.currentY;
        this.initialY;
        this.yOffset = 0;

        // Touch events
        this.container.addEventListener("touchstart", (e) => this.dragStart(e), { passive: false });
        this.container.addEventListener("touchend", (e) => this.dragEnd(e), { passive: false });
        this.container.addEventListener("touchmove", (e) => this.drag(e), { passive: false });

        // Mouse events
        this.container.addEventListener("mousedown", (e) => this.dragStart(e));
        this.container.addEventListener("mouseup", (e) => this.dragEnd(e));
        this.container.addEventListener("mousemove", (e) => this.drag(e));

        // Prevent default drag behavior
        this.container.addEventListener("dragstart", (e) => e.preventDefault());
    }

    dragStart(e) {
        if (e.type === "touchstart") {
            this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
            this.initialY = e.clientY - this.yOffset;
        }

        // Only start dragging if we're not clicking on a switch or button
        if (e.target.closest('.switch') || e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
            return;
        }

        this.isDragging = true;
        this.container.style.transition = 'none';
        this.container.style.cursor = 'grabbing';
    }

    dragEnd(e) {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        this.container.style.cursor = 'grab';
        this.container.style.transition = 'transform 0.3s ease';

        // Animate back to center if dragged too far
        const maxOffset = window.innerHeight * 0.3; // 30% of screen height
        if (Math.abs(this.yOffset) > maxOffset) {
            this.yOffset = Math.sign(this.yOffset) * maxOffset;
            this.setTransform();
        }
    }

    drag(e) {
        if (!this.isDragging) return;
        
        e.preventDefault();
        
        if (e.type === "touchmove") {
            this.currentY = e.touches[0].clientY - this.initialY;
        } else {
            this.currentY = e.clientY - this.initialY;
        }

        this.yOffset = this.currentY;
        this.setTransform();
    }

    setTransform() {
        // Calculate position keeping the horizontal center
        const currentTransform = window.getComputedStyle(this.container).transform;
        const matrix = new DOMMatrix(currentTransform);
        const translateX = matrix.m41; // Get current X translation
        
        this.container.style.transform = `translate(${translateX}px, ${this.yOffset}px)`;
    }
}

// Initialize draggable panels when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel-menu-container');
    panels.forEach(panel => {
        new DraggablePanel(panel);
    });
});